/*
 * @Author: JJ
 * @Title: 请求接口页面展示
 * @Description: 这个页面展示如何请求接口，以及在类的形式下如何使用mobx
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-10-28 11:04:45
 */
import { Component } from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { POST } from "../../utils/request";
import api from "./service";

import "./index.scss";

@inject("stores")
@observer
class RequestPage extends Component {
  componentWillMount() {}

  componentDidMount() {
    const params = {
      keyword: "1",
      latitude: 22.53594898978371,
      longitude: 113.9418198219386,
      pageIndex: 1,
      sort: 5,
      firstPageShowShoppingCart: null,
      isSearchHt: 1,
      cityCode: "31359",
    };
    POST({
      url: api.searchList,
      params: params,
      closeLoading: true,
      success: (res) => {
        // 把接口数据记录到mobx中
        console.log(res.list);
        console.log(this.props);
        // console.log('apple',this.props.stores.commoditysList.changeList)

        this.props.stores.commoditysList.changeList(res.list);
      },
      fail: function () {},
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    // const {
    //   counterStore: { counter },
    // } = this.props.store;
    return <View className="index">接口已经请求成功！返回即可看到数据。</View>;
  }
}

export default RequestPage;
