import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { DxDataGridModule, DxFormModule, DxButtonModule, DxTemplateModule, DxRadioGroupModule } from 'devextreme-angular';
import { PersonsComponent } from './persons.component';
import { MaterialModule } from '../framework/material/material.module';
import { SharedModule } from '../framework/core/shared.module';
import { AboutComponent } from './about/about.component';
import { PersonCreateComponent } from './person-create/person-create.component';

@NgModule({
  imports: [
    CommonModule,
    PersonsRoutingModule,
    MaterialModule,
    SharedModule,
    // Install devextreme module
    DxDataGridModule,
    DxFormModule,
    DxButtonModule,
    DxTemplateModule,
    DxRadioGroupModule
  ],
  declarations: [PersonsComponent, AboutComponent, PersonCreateComponent]
})
export class PersonsModule { }
