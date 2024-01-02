import React, { useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, View } from "react-native";

import { styles } from "./styles";
import { ImgBatLogo } from "../../images";
import { InputDefault } from "../InputDefault";
import { ButtonAction } from "../ButtonAction";
import { IScreenProps } from "../Interfaces";
interface IData {
  name: string;
  phone: string;
  contact: string;
  localization: string;
  observation: string;
}
export function ScreenTwo({ setAction }: IScreenProps) {
  const [data, setData] = useState<IData>({ name: "", phone: "", contact: "", localization: "", observation: "" });
  const handleSetData = (key: string, value: string) => {
    setData({ ...data, [key]: value });
  };
  const message = (data: IData): string => {
    let m = "";
    m += data.name + "\r\n";
    m += data.phone + "\r\n";
    m += data.contact + "\r\n";
    m += data.localization + "\r\n";
    m += data.observation;
    return m;
  };
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView style={styles.appScrollView}>
        <View style={styles.appContainerImage}>
          <Image style={styles.appImage} source={ImgBatLogo} />
        </View>
        <InputDefault label="Nome:" value={data.name} onChangeText={(text) => handleSetData("name", text)} />
        <InputDefault keyboardType={"phone-pad"} label="Telefone:" value={data.phone} onChangeText={(text) => handleSetData("phone", text)} />
        <InputDefault label="Contato:" value={data.contact} height={69} onChangeText={(text) => handleSetData("contact", text)} multiline={true} numberOfLines={3} />
        <InputDefault label="Localização:" value={data.localization} height={69} onChangeText={(text) => handleSetData("localization", text)} multiline={true} numberOfLines={3} />
        <InputDefault label="Observações:" value={data.observation} height={69} onChangeText={(text) => handleSetData("observation", text)} multiline={true} numberOfLines={6} />
        <ButtonAction
          label="Enviar"
          setAction={() => {
            Alert.alert("Dados enviados com sucesso", message(data));
          }}
        />
        <ButtonAction label="Voltar" setAction={setAction} />
      </ScrollView>
    </SafeAreaView>
  );
}
