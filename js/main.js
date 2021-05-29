import {exportPersons} from './Persons.js';
import {Person} from './Class/Person.js';

const arrayPersons = exportPersons();

arrayPersons.forEach((person) => {
  let _Person = new Person(person);
  arrayPersons.push(_Person);

  _Person.createTR();
});

document.querySelector("#countPerson").innerHTML = arrayPersons.length;