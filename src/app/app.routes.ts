import { Routes } from '@angular/router';
import { StationsListComponent } from './stations-list/stations-list.component';
import { StationsGraphComponent } from './stations-graph/stations-graph.component';

export const routes: Routes = [
    {path: 'list', component: StationsListComponent},
    {path: 'graph', component: StationsGraphComponent},

];
