// angular
import { Component, OnInit } from '@angular/core';

// libs
import { Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';
// TODO: ngx-i18n-router
// import { I18NRouterService } from '@ngx-i18n-router/core';

// framework
import { BaseComponent } from './framework/core/core.module';
import { I18NState, Init } from './framework/i18n/i18n.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(private readonly i18nStore: Store<I18NState>,
    private readonly config: ConfigService) {
    super();
    // TODO: ngx-i18n-router
    // private readonly i18nRouter: I18NRouterService) {
  }

  ngOnInit(): void {
    this.i18nStore.dispatch(new Init(this.config.getSettings('i18n')));
  }
}
