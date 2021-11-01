/*
 * @Author: JJ
 * @Title: 首页介绍
 * @Description: -
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-10-26 11:02:25
 */
import React, { useCallback, useEffect, useState } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtIcon, AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import styles from "./index.scss";
// import Store from "../store";

const App = observer((props) => {
  const list = [
    {
      icon: "check",
      size: "15",
      label: "框架：",
      name: "Taro V3.3.10",
    },
    {
      icon: "check",
      size: "15",
      label: "UI：",
      name: "Taro UI",
    },
    {
      icon: "check",
      size: "15",
      label: "状态管理：",
      name: "Mobx V6+",
    },
    {
      icon: "check",
      size: "15",
      label: "路由：",
      name: "React-router",
    },
  ];

  const tabList = [
    { title: "首页展示" },
    { title: "接口示例" },
    { title: "mobx示例" },
    { title: "购物流程" },
  ];

  const [current, updateCurrent] = useState(0);

  const { stores } = React.useContext(MobXProviderContext);
  const { commoditysList } = stores;
  console.log("what", commoditysList.list);

  useEffect(() => {
    console.log("1", props);
  });

  const gotoStore = () => {
    Taro.navigateTo({
      url: "/pages/store/index",
    });
  };

  const gotoRequest = () => {
    Taro.navigateTo({
      url: "/pages/requestPage/index",
    });
  };

  const gotoBuy = () => {
    Taro.navigateTo({
      url: "/pages/buy/index",
    });
  }

  const handleClick = (value) => {
    console.log(value);
    updateCurrent(value);
  };
  return (
    <View className="components-page">
      <View>天虹小程序V1.0.0</View>
      {list.map((item, index) => {
        return (
          <View key={index} className={styles.listView}>
            <View className={styles.label}>
              <AtIcon value={item.icon} size={item.size} color="green"></AtIcon>
              {item.label}
            </View>
            <View className={styles.content}>{item.name}</View>
          </View>
        );
      })}

      <AtTabs
        current={current}
        tabList={tabList}
        onClick={handleClick}
        className={styles.tabTop}
      >
        <AtTabsPane current={current} index={0}>
          <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
            天虹小程序框架V1.0.0
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
            <AtButton type="primary" size="normal" onClick={gotoRequest}>
              接口示例
            </AtButton>
            {commoditysList.list.map((item, index) => {
              return (
                <View key={index}>
                  <View>{item.merchantName}</View>
                </View>
              );
            })}
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
            <AtButton type="primary" size="normal" onClick={gotoStore}>
              mobx示例
            </AtButton>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={3}>
          <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
            <AtButton type="primary" size="normal" onClick={gotoBuy}>
              购物流程
            </AtButton>
          </View>
        </AtTabsPane>
      </AtTabs>

      {/* <View onClick={gotoRequest}>请求接口展示页面</View>
      <View onClick={gotoStore}>状态管理</View> */}
    </View>
  );
});

export default App;
