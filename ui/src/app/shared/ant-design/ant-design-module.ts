/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
registerLocaleData(en);

/** config ng-zorro-antd i18n **/
import { NZ_I18N, en_GB } from 'ng-zorro-antd/i18n';

const ngZorroConfig: NzConfig = {
    message: { nzTop: 120 },
    notification: { nzTop: 240 },
    theme: {
      primaryColor: '#119c8c'
    }
  };

/** set the default i18n config **/
@NgModule({
  providers   : [
    { provide: NZ_I18N, useValue: en_GB },
    { provide: NZ_CONFIG, useValue: ngZorroConfig }
  ]
})
export class AntDesignConfigModule { }