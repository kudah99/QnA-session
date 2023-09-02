import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QnaDashboardRoutingModule } from './qna-dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, QnaDashboardRoutingModule,NzLayoutModule,NzMenuModule],
})
export class QnaDashboardModule {}
