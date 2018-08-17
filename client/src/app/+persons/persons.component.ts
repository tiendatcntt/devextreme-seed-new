// angular
import { Component, OnInit } from '@angular/core';

// framework

// app
import { routeAnimation } from '../app.animations';
import { BaseComponent } from '../framework/core/core.module';
import { PersonService } from './person.service';
import { Person } from '../shared/models/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
  animations: [routeAnimation]
})

export class PersonsComponent extends BaseComponent implements OnInit {

  personDataSource: Person [];

  constructor (private personService: PersonService, private route: Router) {
    super();
  }
  ngOnInit() {
    this.loadData();
   }
   private loadData() {
     this.personDataSource = this.personService.getPersons();
   }
   addPerson() {
     this.route.navigate(['create']);
   }
}
