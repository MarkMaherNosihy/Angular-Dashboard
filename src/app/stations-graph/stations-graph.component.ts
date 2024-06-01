import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-stations-graph',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './stations-graph.component.html',
  styleUrl: './stations-graph.component.css'
})
export class StationsGraphComponent implements AfterViewInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 100,
        max: 300,
        ticks: {stepSize: 50}
      },
    },
    responsive: true,
    maintainAspectRatio:false
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1'],
    datasets: [
      { data: [250, 145, 195, 240, 140], label: 'Series A', barThickness: 15,  backgroundColor: '#FF7F5C' },
      
    ],
    
  };

  ngAfterViewInit(): void {
    
  }
}
