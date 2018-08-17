// angular
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { REQUEST } from '@nguniversal/express-engine/tokens';

// libs
import { CACHE } from '@ngx-cache/core';
import { BrowserCacheModule, MemoryCacheService } from '@ngx-cache/platform-browser';
import { AuthLoader, AuthModule, AuthStaticLoader } from '@ngx-auth/core';
import 'hammerjs';

// framework
import { ConsoleService, CoreModule, WindowService } from './framework/core/core.module';

// modules & components
import { AppModule, REQ_KEY } from './app.module';
import { AppComponent } from './app.component';

import { BrowserStateTransferModule } from '@ngx-universal/state-transfer';

// for AoT compilation
export function windowFactory(): any {
  return window;
}

export function consoleFactory(): any {
  return console;
}

export function requestFactory(transferState: TransferState): any {
  return transferState.get<any>(REQ_KEY, {});
}

export function authFactory(): AuthLoader {
  return new AuthStaticLoader({
    backend: {
      endpoint: '/api/authenticate',
      params: []
    },
    storage: localStorage,
    storageKey: 'currentUser',
    loginRoute: ['login'],
    defaultUrl: ''
  });
}

@NgModule({
  imports: [
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    BrowserCacheModule.forRoot([
      {
        provide: CACHE,
        useClass: MemoryCacheService
      }
    ]),
    CoreModule.forRoot([
      {
        provide: WindowService,
        useFactory: windowFactory
      },
      {
        provide: ConsoleService,
        useFactory: consoleFactory
      }
    ]),
    BrowserStateTransferModule.forRoot(),
    AppModule,
    AuthModule.forRoot({
      provide: AuthLoader,
      useFactory: (authFactory)
    })
  ],
  providers: [
    {
      provide: REQUEST,
      useFactory: requestFactory,
      deps: [TransferState]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
}
