import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

// libs
import { bootloader } from '@angularclass/bootloader';

// app
import { AppBrowserModule } from './app/app.browser.module';

if (environment.production) {
  enableProdMode();
}

export function main(): any {
  return platformBrowserDynamic()
    .bootstrapModule(AppBrowserModule);
}

bootloader(main);
