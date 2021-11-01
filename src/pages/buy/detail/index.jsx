/*
 * @Author: JJ
 * @Title: 完整购物流程页面
 * @Description: 这个页面展示hooks下的生命周期，以及整个购物流程
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-10-28 11:43:40
 */
import React, { useEffect, useState, useReducer } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import { View, Image, Button } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro"; // Taro 专有 Hooks
import { POST } from "../../../utils/request";
import api from "../service";

const Detail = observer((props) => {
  const { stores } = React.useContext(MobXProviderContext);
  const [data, updateData] = useState({});

  //
  useEffect(() => {
    const params = {
      productCode: "P5130003920948S",
    };
    // function ()
    POST({
      url: api.detail,
      params: params,
      closeLoading: true,
      success: (res) => {
        console.log(res);
        updateData(res.data);
      },
      fail: function () {},
    });
  }, []);

  const gotoBuy = () => {
    Taro.requestPayment({
      timeStamp: new Date(),
      nonceStr: "xxx",
      package: "xxx",
      signType: "MD5",
      paySign: "xxx",
      complete: function (res) {},
      success: function (res) {
        console.log(res, "success");
      },
      fail: function (res) {
        console.log(res, "fail");
      },
    });
  };

  return (
    <View className="App">
      <Image src={data.advImageUrl} />
      <View>{data.name}</View>
      <View>{`¥${data.salePrice}`}</View>
      <Button></Button>
      <AtButton type="primary" onClick={gotoBuy}>
        买！
      </AtButton>
    </View>
  );
});

export default Detail;
