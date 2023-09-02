import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { qnaDashoardRoutes } from './qna-dashboard.routes';


@NgModule({
  imports: [RouterModule.forChild(qnaDashoardRoutes)],
  exports: [RouterModule]
})
export class QnaDashboardRoutingModule { }
