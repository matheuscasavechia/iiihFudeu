import React, { useState } from "react";
import TemplateLogin from "../../components/templates/Login";
import { useNavigation } from "@react-navigation/native";
import { tryLogin } from "./functions";

type Props = {};

const Login = (props: Props) => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressEnter = () => {
    console.log("email, password");
    console.log(email, password);

    if (tryLogin(email, password)) navigation.navigate("Home");
    else console.log("usuario ou senha errada");
  };

  return (
    <TemplateLogin
      onPressEnter={onPressEnter}
      onChangeEmail={setEmail}
      onChangePassword={setPassword}
      email={email}
      password={password}
    />
  );
};

export default Login;
