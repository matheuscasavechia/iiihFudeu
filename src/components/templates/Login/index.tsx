import React from "react";
import { Text, View, Button, TouchableOpacity, TextInput } from "react-native";
import { Input } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  onPressEnter?: () => void;
  onPressSingnin?: () => void;
  email: string;
  password: string;
  onChangeEmail: (text: string) => void;
  onChangePassword: (text: string) => void;
};

const TemplateLogin = ({
  onPressEnter,
  onChangeEmail,
  onChangePassword,
  email,
  password,
}: Props) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#ffffff", "#FF61DC", "#FF41D5"]}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "50%",
        }}
      >
        <Text style={{ fontSize: 30 }}>iiih FUDEU!!!</Text>
      </View>

      <View
        style={{
          height: 150,
          justifyContent: "center",
          marginLeft: 16,
          marginRight: 16,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={onChangeEmail}
          style={{
            borderBottomColor: "#999999",
            borderBottomWidth: 1,
            height: 40,
            width: "95%",
            color: "#999999",
          }}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={onChangePassword}
          style={{
            borderBottomColor: "#999999",
            borderBottomWidth: 1,
            height: 40,
            width: "95%",
            color: "#999999",
            marginTop: 25,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={onPressEnter}
        style={{
          height: 50,
          width: "95%",
          justifyContent: "center",
          alignSelf: "center",
          backgroundColor: "#ffffff",
          borderRadius: 36,
          elevation: 5,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#FA69DA",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Bora Entrar!
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {}}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#ffffff", textDecorationLine: "underline" }}>
          Faça seu cadastro já!
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <View
          style={{
            height: 1,
            backgroundColor: "#ffffff",
            width: 150,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            textAlign: "center",
            marginLeft: 10,
            marginRight: 10,
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          ou
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#ffffff",
            width: 150,
            alignSelf: "center",
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default TemplateLogin;
