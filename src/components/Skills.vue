<template>
  <v-container fluid class="background-color-clearer" id="skills">
    <v-flex class="skills-wrapper">
      <v-layout align-center column mt-10 mx-15>
        <v-flex
          class="display-3 font-weight-thin white--text text-xs-center mb-1"
          >Skills</v-flex
        >
      </v-layout>
      <v-divider></v-divider>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-card class="ma-5" max-width="350" color="white">
            <v-card-text class="text-center">
              <p class="headline black--text">Programming</p>
              <pie-chart
                :data="languagesData"
                :options="chartOptions"
              ></pie-chart>
            </v-card-text>
          </v-card>
          <v-card class="ma-5" max-width="350" color="white">
            <v-card-text class="text-center">
              <p class="headline black--text">Other</p>
              <pie-chart :data="otherData" :options="chartOptions"></pie-chart>
            </v-card-text>
          </v-card>
          <v-card class="ma-5" max-width="350" color="white">
            <v-card-text class="text-center">
              <p class="headline black--text">General</p>
              <pie-chart
                :data="generalData"
                :options="chartOptions"
              ></pie-chart>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-flex>
  </v-container>
</template>

<script>
import PieChart from "../PieChart.js";

export default {
  components: {
    PieChart
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 10
      },
      languagesData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Python", "Golang", "Node.js", "C/C++"],
        datasets: [
          {
            label: "Languages data",
            backgroundColor: ["#fad341", "#3aadd8", "#339834", "#cc2d2d"],
            data: [10, 7, 7, 6]
          }
        ]
      },
      otherData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Cloud", "Docker", "Bash", "Kubernetes", "Java"],
        datasets: [
          {
            label: "Other data",
            backgroundColor: [
              "#2c7b70",
              "#fad341",
              "#3aadd8",
              "#339834",
              "#cc2d2d"
            ],
            data: [10, 8, 8, 7, 6]
          }
        ]
      },
      generalData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: [
          "Networking",
          "Infrastructure architecture",
          "Troubleshooting"
        ],
        datasets: [
          {
            label: "General data",
            backgroundColor: ["#2c7b70", "#fad341", "#3aadd8", "#339834"],
            data: [10, 8, 10]
          }
        ]
      }
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style scoped>
.skills-wrapper {
  margin-left: 18vw;
  margin-right: 18vw;
}
.small {
  max-width: 300px;
  margin: 150px auto;
}
.first {
  margin-left: 2px;
}
.last {
  margin-left: 2px;
}
</style>
