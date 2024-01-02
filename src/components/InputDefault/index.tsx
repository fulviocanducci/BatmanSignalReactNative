import React from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

import { styles } from "./styles";

interface IInputDefault {
  label: string;
  value: string;
  onChangeText?: ((text: string) => void) | undefined;
  multiline?: boolean;
  numberOfLines?: number;
  height?: number;
  keyboardType?: KeyboardTypeOptions;
}

export function InputDefault({ label, value, onChangeText, multiline, numberOfLines, height, keyboardType = "default" }: IInputDefault) {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.appLabel}>{label}</Text>
      <TextInput keyboardType={keyboardType} style={[styles.textInput, { height: height }]} onChangeText={onChangeText} value={value} multiline={multiline} numberOfLines={numberOfLines} />
    </View>
  );
}
