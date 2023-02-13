import { Chart } from './chartsConfig.js'



export class BarChart extends Chart{

    chartData = [];



    setDatasets(datasets){
        let dates = [];
        datasets.forEach(element => {
            dates.push(element.buy_date);
            this.chartData.push(element.value);
            console.log(element.sold_date);
        });

        dates.sort(function(a,b){  
            var dateA = new Date(a).getTime();
            var dateB = new Date(b).getTime();
            return dateA > dateB ? 1 : -1;  
        }); 
        console.log(dates);

    }



    getData(){

        return {

            labels: this.chartLabels,

            datasets: [{

                label: 'value',

                backgroundColor: '#85C8F3 ',

                data: this.chartData

            }]

          }

    }

}