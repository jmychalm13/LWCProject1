import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {


  employee = {
    fname: 'Jess',
    lname: 'Moore',
    age: 40,
    city: 'Nashville'
  }

  get getEmployeeRank()
  {
    const rank = this.employee.age >= 50 ? "One" : this.employee.age >= 30 ? "Two" : "Three";
    return rank;
  }
}