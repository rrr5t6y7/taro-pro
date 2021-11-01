import React, { Component } from "react";
import { Provider, observer } from "mobx-react";
import "taro-ui/dist/style/index.scss";
import stores from "./store";
import "./app.scss";

console.log("123", stores);

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 就是要渲染的页面
  render() {
    return (
      <React.StrictMode>
        <Provider stores={stores}>{this.props.children}</Provider>
      </React.StrictMode>
    );
  }
}

export default App;
