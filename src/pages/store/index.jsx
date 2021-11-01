/*
 * @Author: JJ
 * @Title: mobx状态管理展示
 * @Description: 这个页面展示如何收发数据状态
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-10-26 11:03:09
 */
import React, { useEffect, useState } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import { View, Button } from "@tarojs/components";
import Child from "./components/Child";

const App = observer((props) => {
  const [x, setX] = useState(0);
  const { stores } = React.useContext(MobXProviderContext);
  const { example, userInfo } = stores;

  useEffect(() => {
    console.log("1", props);
  });

  return (
    <View className="App">
      <View>who i am:{userInfo.name}</View>
      <View>how old i am:{userInfo.age}</View>
      <Button onClick={userInfo.changeName}>改变名字</Button>
      <Button onClick={userInfo.changeAge}>改变年龄</Button>
      <View>x:{x}</View>
      <View>{example.a}</View>
      <View>{example.b}</View>
      <Button onClick={() => setX(x + 1)}>set x</Button>
      <Button onClick={example.add}>add按钮1</Button>
      <Button onClick={example.add2}>add2按钮2</Button>
      <Child />
      <br />
    </View>
  );
});

export default App;
