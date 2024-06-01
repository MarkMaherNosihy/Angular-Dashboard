import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';
import { SalesComponent } from '../sales/sales.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, RadarChartComponent, SalesComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
