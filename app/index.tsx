import { View } from "react-native";
import App from "./App.jsx";

export default function Index() {
  let listItems = [
    {
      key: 1,
      text: "Do laundry",
    },
    {
      key: 2,
      text: "Do Taxes",
    },
    {
      key: 3,
      text: "Do Suffering",
    },
    {
      key: 4,
      text: "Do Suffering",
    },
  ]


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <App/>
    </View>
  );
}
