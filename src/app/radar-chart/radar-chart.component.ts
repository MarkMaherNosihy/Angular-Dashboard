import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [ BaseChartDirective],
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {
  public radarChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        borderCapStyle: 'round', // Rounded ends
        borderJoinStyle: 'round', // Rounded joins
        tension: 0.4, // Smoothing the line curves for more rounded appearance
        borderWidth: 1
      },
      point: {
        radius: 0, // Removing points
      },
      
    },
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 14,
          },
        },
      },
      
    },
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend: {
        display: false
      }
    }
  };

  public radarChartLabels: string[] = [
    '24:00',
    '02:00',
    '04:00',
    '06:00',
    '08:00',
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { 
        data: [70, 90, 90, 90, 70, 90, 70, 90, 90, 90, 70, 90]

        , 
        label: 'Series A',
        
        borderColor: '#009ACF',
        backgroundColor: 'rgba(0, 154, 207, 0.2)',
      },
      { 
        data: [65, 75, 85, 75, 65, 55, 50, 55, 65, 75, 85, 75], 
        label: 'Series B',
        borderColor: '#00CBC0',
        backgroundColor: 'rgba(0, 203, 192, 0.2)',
      },
    ],
  };

  public radarChartType: ChartType = 'radar';
}
