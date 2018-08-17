import { Injectable } from '@angular/core';
import { Person } from '../shared/models/person.model';
import { PersonData } from '../shared/mocks/persons.mock';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPersons(): Person[] {
    return PersonData;
  }
}
