<template>
    <div class="container w-full h-full flex flex-col justify-between py-24 space-y-12">
      <div class="w-full space-x-12 flex justify-center ">


        <div class="w-3/4 bg-white rounded-xl p-5 shadow-2xl">
            <Bar v-if="loaded" :data="barData" :options="options" />
        </div>

        <div class="self-end bg-white w-1/4 h-full p-5 rounded-xl shadow-2xl">
           <Doughnut v-if="loaded" :data="dgData" :options="options" />
        </div>

        

      </div>

        <div class="w-full h-full bg-white rounded-xl p-5 shadow-2xl">
          <Line v-if="loaded" :data="lineData" :options="options" />
        </div>

      
    </div>
</template>
  
  <script>
  import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
  import { Bar, Doughnut, Line } from 'vue-chartjs'
  import { BarChart } from '../components/charts/barChart.js'
  import { DoughnutChart } from '../components/charts/doughnutChart.js'
  import { LineChart } from '../components/charts/lineChart.js'


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
          const barChart = new BarChart();
          const doughnutChart = new DoughnutChart();
          const lineChart = new LineChart();
          const { GetAllPalletsData } = PalletCrud();

          GetAllPalletsData().then(data =>{
            // console.log(data);
            // let dgDataLoaded = {labels: [data[0].subject, data[1].subject, data[2].subject, data[3].subject]};
            // // let barDataLoaded = {labels: [data[0].subject, data[1].subject, data[2].subject, data[3].subject]};
            // let lineDataLoaded = {labels: [data[0].subject, data[1].subject, data[2].subject, data[3].subject]};
            // chart.importData(dgDataLoaded,data, lineDataLoaded);
            // this.dgData = chart.doughnutData();
            // this.barData = chart.barData();
            // this.lineData = chart.lineData();
            lineChart.importData(data, data);
            this.lineData = lineChart.getData();
            doughnutChart.importData(['Earning pallets', 'Losing pallets'], data)
            this.dgData = doughnutChart.getData();
            barChart.importData(data, data);
            this.barData = barChart.getData();
            this.loaded = true;
          });
        }
        catch (e) {
          console.error(e)
        }
    }
  }
</script>