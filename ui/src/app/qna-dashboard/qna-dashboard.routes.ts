import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const qnaDashoardRoutes: Route[] = [
    {path: ':id', component: HomeComponent},
];
