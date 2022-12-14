import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  canvas!: any;
  ctx!: any;
  elems: any;
  instances:any;
  button: any;
  ins:any;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.createChart('bar','myChart');
    this.createChart('doughnut','myChart2');
  }

  createChart(chartName: any, id: any){
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: chartName,
      data: {
        labels: ['Nasa', 'Tesla', 'Google', 'Amazon', 'Shoope', 'Meta'],
        datasets: [
          {
            label: 'Team',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
