import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  appScrollView: {
    marginHorizontal: 2,
  },
  appContainerImage: {
    alignContent: "center",
    alignItems: "center",
  },
  appImage: {
    resizeMode: "contain",
    height: 60,
  },
});
