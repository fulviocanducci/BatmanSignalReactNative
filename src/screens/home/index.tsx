import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { ScreenOne, ScreenTwo } from "../../components";

export function Home() {
  const [screenActive, setScreenActive] = React.useState<number>(0);
  const handleScreenOne = () => setScreenActive(1);
  const handleScreenTwo = () => setScreenActive(0);
  return (
    <View style={styles.container}>
      {screenActive === 0 && <ScreenOne setAction={handleScreenOne} label="Ativar Batman Sinal" />}
      {screenActive === 1 && <ScreenTwo />}
    </View>
  );
}
