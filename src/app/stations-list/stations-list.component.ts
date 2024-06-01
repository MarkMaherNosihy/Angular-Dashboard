import { Component } from '@angular/core';
import { StationComponent } from './station/station.component';

@Component({
  selector: 'app-stations-list',
  standalone: true,
  imports: [StationComponent],
  templateUrl: './stations-list.component.html',
  styleUrl: './stations-list.component.css'
})
export class StationsListComponent {
  stations: number[] = [1,2,3,4,5,6, 1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6];
}
