import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../view/login/Login";
import Home from "../view/home/Home";
import Exercise from "../view/muscle/Exercise";
import Food from "../view/food/Food";
import { TransitionPresets } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import exampleExercise from "../view/excercise/exampleExercise";

export type RootStackParams = {
  Login: undefined;
  Home: undefined;
  Exercise: undefined;
  Food: undefined;
  exampleExercise: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromLeftIOS,
        ...TransitionPresets.ModalFadeTransition,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        headerStyle: {
          backgroundColor: "transparent",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          ...styles.containerStyle,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        cardStyle: {},
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Exercise" component={Exercise} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="exampleExercise" component={exampleExercise} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});
