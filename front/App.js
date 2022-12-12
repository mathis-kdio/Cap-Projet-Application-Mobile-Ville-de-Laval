import * as React from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/HomeNavigation'
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigation />
        <StatusBar style="light" backgroundColor="#ffda00"/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}