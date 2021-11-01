import { makeAutoObservable } from "mobx";

class Example {
  constructor() {
    makeAutoObservable(this);
  }
  a = 1;
  b = 2;

  add = () => {
    this.a++;
  };

  add2 = () => {
    this.b++;
  };
}
const example = new Example();

export default example;
