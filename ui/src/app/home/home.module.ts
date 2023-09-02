import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboadComponent } from './pages/dashboad/dashboad.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { ParticipantsViewComponent } from './components/participants-view/participants-view.component';
import { IconsProviderModule } from '../shared/ant-design/icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { QuestionsViewComponent } from './components/questions-view/questions-view.component';


@NgModule({
  declarations: [
    DashboadComponent,
    ParticipantsViewComponent,
    QuestionsViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzMenuModule,
    NzLayoutModule,
    NzListModule,
    IconsProviderModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzTagModule,
    NzCardModule,
    NzGridModule,
    NzAvatarModule,
    NzToolTipModule,
    NzBadgeModule
  ],
})
export class HomeModule {}
