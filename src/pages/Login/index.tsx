import React, { useState } from "react";
import TemplateLogin from "../../components/templates/Login";
import { useNavigation } from "@react-navigation/native";
import { tryLogin } from "./functions";

type Props = {};

const Login = (props: Props) => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onPressEnter = () => {
    if (tryLogin(email, password)) navigation.navigate("Home");
    else console.log("usuario ou senha errada");
  };

  const onPressShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TemplateLogin
      onPressEnter={onPressEnter}
      onChangeEmail={setEmail}
      onChangePassword={setPassword}
      email={email}
      password={password}
      showPassword={showPassword}
      onPressShowPassword={onPressShowPassword}
    />
  );
};

export default Login;
