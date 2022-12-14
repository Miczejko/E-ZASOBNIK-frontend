<template>
    <div class="container">
      <div>
        <Doughnut v-if="loaded" :data="dgData" :options="options" />
      </div>
      <div style="height: 600px; background-color: cadetblue;">
        <Bar v-if="loaded" :data="barData" :options="options" />
      </div>
      <div style="height: 600px; background-color: aliceblue;">
        <Line v-if="loaded" :data="lineData" :options="options" />
      </div>
    </div>
</template>
  
  <script>
  import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
  import { Doughnut, Bar, Line } from 'vue-chartjs'
  // import * as doughnutConfig from '../components/charts/chartsConfig.js'
  import { Chart } from '../components/charts/chartsConfig.js'
  import PalletCrud from '@/modules/PalletCrud'
  
  ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement )
  
  export default {
    name: 'App',
    components: {
      Doughnut,
      Bar,
      Line
    },
    data: () => ({  //charts data and options
      loaded: false,

      dgData: null,
      barData: null,
      lineData: null,

      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }),

    async mounted () {    // loading data on mounted
        this.loaded = false;

        try{
          const chart = new Chart();
          const { GetAllPalletsData } = PalletCrud();
          GetAllPalletsData().then(data =>{
            console.log(data);
            let dgDataLoaded = {labels: [data[0].subject, data[1].subject, data[2].subject, data[3].subject]};
            // let barDataLoaded = {labels: [data[0].subject, data[1].subject, data[2].subject, data[3].subject]};
            let lineDataLoaded = {labels: [data[0].subject, data[1].subject, data[2].subject, data[3].subject]};
            chart.importData(dgDataLoaded,data, lineDataLoaded);
            this.dgData = chart.doughnutData();
            this.barData = chart.barData();
            this.lineData = chart.lineData();
            this.loaded = true;
          });
        }
        catch (e) {
          console.error(e)
        }
    }
  }
</script>