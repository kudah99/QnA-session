import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule,  } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AntDesignConfigModule } from './shared/ant-design/ant-design-module';
import { IconsProviderModule } from './shared/ant-design/icons-provider.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { environment } from 'src/environments/environment.prod';
import { effects, reducers } from './store/app.state';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntDesignConfigModule,
    IconsProviderModule,
    NzIconModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    AntDesignConfigModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
