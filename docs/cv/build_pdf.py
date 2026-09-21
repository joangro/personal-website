"""Render the public CV. Install reportlab; run this script from any directory.
Font paths may be overridden for other operating systems.
"""
import argparse
import html
import re
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, PageBreak


def main():
    parser = argparse.ArgumentParser()
    base = Path(__file__).resolve().parent
    parser.add_argument('--source', type=Path, default=base / 'joan-grau-cv.md')
    parser.add_argument('--output', type=Path, default=base.parents[1] / 'public' / 'Joan-Grau-CV.pdf')
    parser.add_argument('--font', default='/usr/share/fonts/TTF/FiraSans-Regular.ttf')
    parser.add_argument('--bold-font', default='/usr/share/fonts/TTF/FiraSans-SemiBold.ttf')
    parser.add_argument('--paged', action='store_true',
                        help='Use A4 pages instead of one continuous page.')
    args = parser.parse_args()
    pdfmetrics.registerFont(TTFont('CV', args.font))
    pdfmetrics.registerFont(TTFont('CVBold', args.bold_font))
    pdfmetrics.registerFontFamily('CV', normal='CV', bold='CVBold')
    ink = colors.HexColor('#182432')
    accent = colors.HexColor('#23576B')
    body = ParagraphStyle('body', fontName='CV', fontSize=11, leading=13.8,
                          textColor=ink, spaceAfter=6, alignment=TA_LEFT)
    styles = {
        'body': body,
        'name': ParagraphStyle('name', parent=body, fontName='CVBold', fontSize=25,
                               leading=29, spaceAfter=5),
        'section': ParagraphStyle('section', parent=body, fontName='CVBold',
                                  fontSize=10.5, textColor=accent, spaceBefore=11,
                                  spaceAfter=6, keepWithNext=True),
        'role': ParagraphStyle('role', parent=body, fontName='CVBold', fontSize=11.2,
                               spaceBefore=5, keepWithNext=True),
        'bullet': ParagraphStyle('bullet', parent=body, leftIndent=10,
                                 firstLineIndent=-8, spaceAfter=4.5),
    }

    def inline(text):
        escaped = html.escape(text)
        escaped = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', escaped)
        return re.sub(r'\[([^]]+)\]\(([^)]+)\)',
                      r'<link href="\2" color="#23576B">\1</link>', escaped)

    story = []
    for line in args.source.read_text().splitlines():
        if not line.strip():
            continue
        if line == '<!-- pagebreak -->':
            if args.paged:
                story.append(PageBreak())
            continue
        style, text = 'body', line
        for prefix, kind in [('### ', 'role'), ('## ', 'section'), ('# ', 'name'), ('- ', 'bullet')]:
            if line.startswith(prefix):
                style, text = kind, line[len(prefix):]
                break
        if style == 'bullet':
            text = '• ' + text
        story.append(Paragraph(inline(text), styles[style]))

    def footer(canvas, doc):
        canvas.setFont('CV', 8)
        canvas.setFillColor(colors.HexColor('#66727C'))
        canvas.drawString(43, 25, 'Joan Grau Noël | Site Reliability Engineer')
        if args.paged:
            canvas.drawRightString(A4[0] - 43, 25, str(doc.page))

    page_size = A4
    if not args.paged:
        # Match the document margins and the frame's default 6pt padding.
        available_width = A4[0] - 2 * 43 - 12
        content_height = 0
        previous_space = 0
        for index, paragraph in enumerate(story):
            _, height = paragraph.wrap(available_width, float('inf'))
            if index:
                content_height += max(previous_space, paragraph.getSpaceBefore())
            content_height += height
            previous_space = paragraph.getSpaceAfter()
        page_size = (A4[0], content_height + previous_space + 34 + 43 + 12 + 1)

    doc = SimpleDocTemplate(str(args.output), pagesize=page_size, rightMargin=43,
                            leftMargin=43, topMargin=34, bottomMargin=43,
                            title='Joan Grau Noël — Site Reliability Engineer',
                            author='Joan Grau Noël')
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(args.output)


if __name__ == '__main__':
    main()
