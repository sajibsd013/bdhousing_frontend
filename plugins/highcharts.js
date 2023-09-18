import Vue from "vue";
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import stockInit from "highcharts/modules/stock";
import Highcharts3d from "highcharts/highcharts-3d";
Highcharts3d(Highcharts);
if (typeof Highcharts === "object") {
  stockInit(Highcharts);
}

Vue.use(HighchartsVue);

