import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatDatepickerModule, MatInputModule, MatFormFieldModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideNativeDateAdapter()]
})
export class HeaderComponent {

}
