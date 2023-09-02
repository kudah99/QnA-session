import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren: ()=>import('./home/home.module').then(m =>m.HomeModule)},
    {path: 'qna-session', loadChildren: ()=>import('./qna-dashboard/qna-dashboard.module').then(m =>m.QnaDashboardModule)},
];
