import React from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";
import { IScreenProps } from "../Interfaces";

export function ButtonAction({ setAction, label }: IScreenProps) {
  return (
    <View style={styles.appContainerButton}>
      <View style={styles.appContainerButton}>
        <Pressable style={styles.appButton} onPress={setAction}>
          <Text style={styles.appText}>{label}</Text>
        </Pressable>
      </View>
    </View>
  );
}
