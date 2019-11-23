import { Pie, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Pie,
  props: ["data", "options"],
  mounted() {
    this.renderChart(
      this.data,
      {
        borderWidth: "10px",
        hoverBackgroundColor: "red",
        hoverBorderWidth: "10px"
      },
      {
        legend: {
          fontColor: "white"
        }
      }
    );
  }
};
