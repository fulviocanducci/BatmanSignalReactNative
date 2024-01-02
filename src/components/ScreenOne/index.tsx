import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { IScreenProps } from "../Interfaces";
import { styles } from "./styles";
import { ImgBatLogo } from "../../images";
import { ButtonAction } from "../ButtonAction";

export function ScreenOne({ setAction, label }: IScreenProps) {
  return (
    <>
      <Image style={styles.appImage} source={ImgBatLogo} />
      <ButtonAction setAction={setAction} label={label} />
    </>
  );
}
