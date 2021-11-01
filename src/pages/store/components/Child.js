import { View } from "@tarojs/components";
import { inject, observer } from "mobx-react";

function Child(props) {
  return (
    <View>
      <View className="Child">this is child</View>
      <View>{props.stores.example.a}</View>
    </View>
  );
}

export default inject("stores")(observer(Child));
