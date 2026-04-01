import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../../shared/SplashScreen";
import OnboardingScreen from "../../shared/OnboardingScreen";
import LanguageScreen from "../../shared/LanguageScreen";

import Dashboard from "../../features/dashboard/Dashboard";
import LoginScreen from "../../features/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}