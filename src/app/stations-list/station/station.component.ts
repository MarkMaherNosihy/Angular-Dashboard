import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [MatMenuModule,MatButtonModule, MatIconModule],
  templateUrl: './station.component.html',
  styleUrl: './station.component.css'
})
export class StationComponent {
  stopProp(event: Event){
    event.stopPropagation();
  }
}
