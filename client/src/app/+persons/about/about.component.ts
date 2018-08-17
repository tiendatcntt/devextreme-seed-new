import { routeAnimation } from './../../app.animations';
import { BaseComponent } from './../../framework/core/src/base.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [routeAnimation]
})
export class AboutComponent extends BaseComponent {

}
