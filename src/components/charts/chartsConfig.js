

export class Chart {

  chartLabels = [];

  chartDatasets = [{}];



  importData(labels,datasets){

    this.setLables(labels);

    this.setDatasets(datasets);

  }



  setLables(labels){

    labels.forEach(element => {

      this.chartLabels.push(element.subject);

    });

  }



  setDatasets(datasets){

    datasets.forEach(element => {

      this.chartDatasets[0].data = element.value;

    })

  }



  getData(){

    return {

      labels: this.chartLabels,

      datasets: this.chartDatasets

    }

  }

}


