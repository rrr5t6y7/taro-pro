/*
 * @Author: JJ
 * @Title: 完整购物流程页面
 * @Description: 这个页面展示taro-hooks下的生命周期，以及整个购物流程
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-11-01 15:37:33
 */
import React, { useEffect, useState, useReducer } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import { View, Button } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro, {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
  useReachBottom,
  usePageScroll,
  useResize,
  useShareAppMessage,
  useTabItemTap,
  useAddToFavorites,
} from "@tarojs/taro"; // Taro 专有 Hooks
import { POST } from "../../utils/request";
import api from "./service";

const list = [];

function reducer(state, action) {
  switch (action.type) {
    case "updateList":
      return [...action.payload];
    default:
      throw new Error();
  }
}

const List = observer(() => {
  const [state, dispatch] = useReducer(reducer, list);

  const fetchFn = () => {
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
    return POST({
      url: api.searchList,
      params: params,
      closeLoading: true,
      success: (res) => {
        // 可以选择这种useReducer方式，也可以用useState方式，如果需要状态管理，则选择mobx方式
        //  res;\
        // dispatch({ type: "updateList", payload: res.list });
      },
      fail: function () {},
    });
    // console.log("apple", apple);

    // console.log("effect");
  };

  // 1
  useDidShow(() => {
    console.log("show");
  });

  // 2
  useEffect(async () => {
    // 异步写法
    const a = await fetchFn();
    console.log("gg", a);
    dispatch({ type: "updateList", payload: a.data.list });
  }, []);

  // 3
  useReady(() => {
    console.log("ready");
  });

  useDidHide(() => {
    console.log("hide");
  });

  // 监听用户下拉动作
  usePullDownRefresh(() => {
    console.log("down");
  });

  // 监听用户上拉触底事件
  useReachBottom(() => {
    console.log("bottom");
  });

  // 监听用户滑动页面事件
  usePageScroll((res) => {
    console.log("scroll", res);
  });

  // 旋转时触发
  useResize((res) => {
    console.log("resize", res);
  });

  // 监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容
  useShareAppMessage((res) => {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "自定义转发标题",
      path: "/page/user?id=123",
    };
  });

  // 点击 tab 时触发
  useTabItemTap((res) => {
    console.log("tab", res);
  });

  // 监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容
  useAddToFavorites((res) => {
    // webview 页面返回 webviewUrl
    console.log("WebviewUrl: ", res.webviewUrl);
    return {
      title: "自定义标题",
      imageUrl: "http://demo.png",
      query: "name=xxx&age=xxx",
    };
  });

  const gotoDetail = () => {
    Taro.navigateTo({
      url: "/pages/buy/detail/index",
    });
  };

  return (
    <View className="App">
      <AtList>
        {state.map((item, index) => {
          return (
            <AtListItem
              key={index}
              // <Image src={item.images} />
              title={item.productName}
              note={item.merchantName}
              arrow="right"
              thumb={item.images}
              onClick={gotoDetail}
            />
          );
        })}
      </AtList>
    </View>
  );
});

export default List;
