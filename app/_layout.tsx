import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
//melarang agar tidak tertutup otomatis sebelum disuruh berhenti

export default function RootLayout() {
  const [ loaded, error ] = useFonts({
    "josefin-sans": 
    require("../assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf"),
  });

useEffect (() =>{
  if (loaded && error == null) {
    SplashScreen.hideAsync();
  }
}, [loaded, error]);

if (!loaded && !error) {
  return null;
}


  return <Stack />;
}
