

export class Chart {
  doughnutLabels = [];
  doughnutDatasets = [];

  barLabels = [];
  barDatasets = [];

  lineLabels = [];
  lineDatasets = [];


  importData(doughnut, bar, line){
    this.doughnutLabels = doughnut.labels;

    bar.forEach(element => {
      this.barLabels.push(element.subject);
      console.log(this.barLabels);
      this.barDatasets.push(element.value);
    });

    this.lineLabels = line.labels;
  }

  doughnutData(){
    return {
      labels: this.doughnutLabels,
      datasets: [
        {
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', ],
          data: [40, 20, 80, 10]
        }
      ]
    }
  }

  barData(){
    return {
      labels: this.barLabels,
      datasets: [
        {
          label: 'value',
          backgroundColor: ['#99ccff'],
          data: this.barDatasets
        }
      ]
    }
  }

  lineData(){
    return {
      labels: this.lineLabels,
      datasets: [
        {
          backgroundColor: ['#41B883'],
          label: "dane",
          data: [40, 20, 80, 10],
          color: '#41B883'
        }
      ]
    }
  }
}
