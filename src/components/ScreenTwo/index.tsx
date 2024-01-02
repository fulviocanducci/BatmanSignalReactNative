import React, { useState } from "react";
import { Image, ScrollView, View } from "react-native";

import { styles } from "./styles";
import { ImgBatLogo } from "../../images";
import { InputDefault } from "../InputDefault";
import { ButtonAction } from "../ButtonAction";

export function ScreenTwo() {
  const [data, setData] = useState({ name: "1", phone: "10", contact: "1", localization: "1" });
  const handleSetData = (key: string, value: string) => {
    setData({ ...data, [key]: value });
    console.log(data);
  };
  return (
    <>
      <View>
        <View style={styles.appImageContainer}>
          <Image style={styles.appImage} source={ImgBatLogo} />
        </View>
      </View>
      <InputDefault label="Nome" value={data.name} onChangeText={(text) => handleSetData("name", text)} />
      <InputDefault label="Telefone" value={data.phone} onChangeText={(text) => handleSetData("phone", text)} />
      <InputDefault label="Contato" value={data.contact} height={69} onChangeText={(text) => handleSetData("contact", text)} multiline={true} numberOfLines={5} />
      <InputDefault label="Localização" value={data.localization} height={69} onChangeText={(text) => handleSetData("localization", text)} multiline={true} numberOfLines={5} />
      <ButtonAction label="Enviar" setAction={() => {}} />
    </>
  );
}
