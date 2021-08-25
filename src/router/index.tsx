import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Login from "../pages/Login";

type Props = {};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Router = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen name="Home" options={{}} component={Home} />
    </Stack.Navigator>
  );
};

export default Router;
