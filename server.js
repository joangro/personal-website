import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const distRoot = resolve(projectRoot, "dist");
const indexFile = join(distRoot, "index.html");
const port = Number(process.env.PORT) || 8080;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
};

function fileForPath(pathname) {
  const candidate = resolve(distRoot, `.${pathname}`);
  const candidateRelativeToDist = relative(distRoot, candidate);

  if (
    candidateRelativeToDist.startsWith(`..${sep}`) ||
    candidateRelativeToDist === ".." ||
    candidateRelativeToDist.includes(`${sep}..${sep}`)
  ) {
    return null;
  }

  try {
    return statSync(candidate).isFile() ? candidate : null;
  } catch {
    return null;
  }
}

const server = createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end("Bad Request");
    return;
  }

  const filePath = fileForPath(pathname) ?? indexFile;
  const extension = extname(filePath).toLowerCase();
  const headers = {
    "Content-Type": contentTypes[extension] ?? "application/octet-stream",
  };

  if (filePath.startsWith(`${distRoot}${sep}assets${sep}`)) {
    headers["Cache-Control"] = "public, max-age=31536000, immutable";
  }

  let size;
  try {
    size = statSync(filePath).size;
  } catch {
    response.writeHead(500);
    response.end("Server Error");
    return;
  }

  response.writeHead(200, { ...headers, "Content-Length": size });
  if (request.method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Serving ${distRoot} on port ${port}`);
});
