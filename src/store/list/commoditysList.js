import { makeAutoObservable } from "mobx";

class CommoditysList {
  constructor() {
    makeAutoObservable(this);
  }
  list = []

  changeList = (payload) => {
      console.log('payload',payload)
    this.list = payload;
  };

}

const commoditysList = new CommoditysList();
export default commoditysList;
