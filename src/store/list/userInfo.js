import { makeAutoObservable } from "mobx";

class UserInfo {
  constructor() {
    makeAutoObservable(this);
  }
  name = "jj";
  age = "18";

  changeName = () => {
    this.name = "jj yeah!";
  };

  changeAge = () => {
    this.age++;
  };
}

const userInfo = new UserInfo();
export default userInfo;
