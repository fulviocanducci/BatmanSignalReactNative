import React from "react";
import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";

interface IInputDefault {
  label: string;
  value: string;
  onChangeText?: ((text: string) => void) | undefined;
  multiline?: boolean;
  numberOfLines?: number;
  height?: number;
}

export function InputDefault({ label, value, onChangeText, multiline, numberOfLines, height }: IInputDefault) {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.appLabel}>{label}</Text>
      <TextInput style={[styles.textInput, { height: height }]} onChangeText={onChangeText} value={value} multiline={multiline} numberOfLines={numberOfLines} />
    </View>
  );
}
