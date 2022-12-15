import { Chart } from './chartsConfig.js'



export class DoughnutChart extends Chart{

    chartData = [];
    chartColors = ['#41B883', '#E46651', '#00D8FF', '#DD1B16'];

    setLables(labels){

        labels.forEach(element => {
          this.chartLabels.push(element);
        });
    
      }

    setDatasets(datasets){
        let counterUp = 0;
        let counterDown = 0;
        datasets.forEach(element => {
            if(element.value >= 0){
                counterUp += 1;
            }
            else{
                counterDown += 1;
            }
            this.chartData[0] = counterUp;
            this.chartData[1] = counterDown;

        });

    }



    getData(){

        return {

            labels: this.chartLabels,

            datasets: [{
                backgroundColor: this.chartColors,
                data: this.chartData

            }]

          }

    }

}