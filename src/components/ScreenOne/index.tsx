import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { IScreenProps } from "../Interfaces";
import { styles } from "./styles";
import { ImgBatLogo } from "../../images";
import { ButtonAction } from "../ButtonAction";

export function ScreenOne({ setAction, label }: IScreenProps) {
  return (
    <>
      <View style={styles.appContainerImage}>
        <Image style={styles.appImage} source={ImgBatLogo} />
      </View>
      <ButtonAction setAction={setAction} label={label} />
    </>
  );
}
