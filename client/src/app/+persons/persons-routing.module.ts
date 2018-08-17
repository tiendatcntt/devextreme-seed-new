import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons.component';
import { AboutComponent } from './about/about.component';
import { PersonCreateComponent } from './person-create/person-create.component';
const routes: Routes = [
  { path: '', component: PersonsComponent, data: {
    meta: {
      title: 'PUBLIC.HOME.PAGE_TITLE',
      override: true,
      description: 'PUBLIC.HOME.META_DESCRIPTION'
    }
  }},
  { path: 'about', component: AboutComponent, data: {
    meta: {
      title: 'PUBLIC.ABOUT.PAGE_TITLE',
      override: true,
      description: 'PUBLIC.ABOUT.META_DESCRIPTION'
    }
  } },
  { path: 'create', component: PersonCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
