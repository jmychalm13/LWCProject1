import { LightningElement } from "lwc";

export default class IteratorLoop extends LightningElement {
  employeeList = [
    {
      fname: "MaryJane",
      lname: "Moore",
      age: 8,
      city: "Nashville"
    },
    {
      fname: "Kadyn",
      lname: "Moore",
      age: 13,
      city: "Bristol"
    },
    {
      fname: "Dan",
      lname: "Ford",
      age: 60,
      city: "Nashville"
    }
  ];
}
