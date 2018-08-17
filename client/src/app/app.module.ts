// libs
import { ANGULARTICS2_TOKEN } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { I18NModule, translateFactory, ChangeLanguageComponent } from './framework/i18n/i18n.module';
import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { MetaLoader } from '@ngx-meta/core';
import { ConfigLoader, ConfigService } from '@ngx-config/core';
import { BrowserModule, makeStateKey } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// framework
import { MaterialModule } from './framework/material/material.module';
import { HttpInterceptorModule } from './framework/http/http-interceptor.module';
import { SharedModule } from './framework/core/shared.module';
import { CoreModule, configFactory, metaFactory } from './framework/core/core.module';
import { AnalyticsModule } from './framework/analytics/analytics.module';

// app
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';

export const REQ_KEY = makeStateKey<string>('req');

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = { suppressScrollX: true };

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', loadChildren: './+persons/persons.module#PersonsModule' }
    ]
  },
  {
    path: 'change-language/:languageCode',
    component: ChangeLanguageComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'my-app-id' }),
    TransferHttpCacheModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    PerfectScrollbarModule,
    CoreModule.forRoot([
      {
        provide: ConfigLoader,
        useFactory: configFactory,
        deps: [Injector]
      },
      {
        provide: MetaLoader,
        useFactory: metaFactory,
        deps: [
          ConfigService,
          TranslateService
        ]
      }
    ]),
    SharedModule,
    HttpInterceptorModule,
    MaterialModule,
    I18NModule.forRoot([
      {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [HttpClient]
      }
    ]),
    AnalyticsModule.forRoot([
      {
        provide: ANGULARTICS2_TOKEN,
        useValue: {
          providers: [Angulartics2GoogleAnalytics],
          settings: {}
        }
      }
    ])
  ],
  exports: [AppComponent],
  entryComponents: [ChangeLanguageComponent],
  providers: [
    // I18N_ROUTER_PROVIDERS
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
