import { Chart } from './chartsConfig.js'



export class LineChart extends Chart{

    chartData = [];

    setLables(labels){
        let dates = []; //array with dates

        labels.forEach(element => {     //loading data
            dates.push(element.buy_date);
            if(element.sold_date!= '...'){
                dates.push(element.sold_date);
            }
        });

        dates.sort(function(a,b){               //sorting dates
            var dateA = new Date(a).getTime();
            var dateB = new Date(b).getTime();
            return dateA > dateB ? 1 : -1;  
        }); 
        
        dates.forEach(element => {
            this.chartLabels.push(element);
        });
    }


    setDatasets(datasets){
        let dates = []; //array with dates

        datasets.forEach(element => {     //loading data
            dates.push({date: element.buy_date, value: element.value});
            if(element.sold_date!= '...'){
                dates.push({date: element.sold_date, value: element.value});
            }
        });

        dates.sort(function(a,b){               //sorting dates
            var dateA = new Date(a.date).getTime();
            var dateB = new Date(b.date).getTime();
            return dateA > dateB ? 1 : -1;  
        }); 
        
        dates.forEach(element => {  // setting datasets to right values
            this.chartData.push(element.value);
        });

    }



    getData(){

        return {

            labels: this.chartLabels,

            datasets: [{
                label: 'value',
                backgroundColor: '#9E85F3 ',
                data: this.chartData
            }]

          }

    }

}