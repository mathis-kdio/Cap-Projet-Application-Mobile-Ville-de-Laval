import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home'
import Cantines from '../screens/Cantines'
import Menus from '../screens/Menus'
import Signalement from '../screens/Signalement';
import SignalementDetails from '../screens/SignalementDetails';
import SignalementRenseignements from '../screens/SignalementRenseignements';
import SignalementRecap from '../screens/SignalementRecap';
import SignalementValid from '../screens/SignalementValid';
import SignalementPhotos from '../screens/SignalementPhotos';

const Stack = createNativeStackNavigator();

function HomeNav() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Laval Dans Ma Poche'}} />
      <Stack.Screen name="Cantines" component={CantinesNav} options={{headerShown: false}} />
      <Stack.Screen name="Menus" component={MenusNav} options={{headerShown: false}} />
      <Stack.Screen name="Signalement" component={SignalementNav} options={{headerShown: false}} />
      <Stack.Screen name="SignalementDetails" component={SignalementDetailsNav} options={{headerShown: false}} />
      <Stack.Screen name="SignalementRenseignements" component={SignalementRenseignementsNav} options={{headerShown: false}} />
      <Stack.Screen name="SignalementRecap" component={SignalementRecapNav} options={{headerShown: false}} />
      <Stack.Screen name="SignalementValid" component={SignalementValidNav} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function CantinesNav() {
  return (
    <Stack.Navigator initialRouteName='CantinesHome' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="CantinesHome" component={Cantines} options={{title: 'Cantines'}}/>
    </Stack.Navigator>
  );
}

function MenusNav() {
  return (
    <Stack.Navigator initialRouteName='MenusHome' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="MenusHome" component={Menus} options={{title: 'Menus'}}/>
    </Stack.Navigator>
 );
}

function SignalementNav() {
  return (
    <Stack.Navigator initialRouteName='SignalementHome' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="SignalementHome" component={Signalement} options={{title: 'Signalement'}}/>
      <Stack.Screen name="SignalementDetails" component={SignalementDetailsNav} options={{headerShown: false}} />
      <Stack.Screen name="SignalementPhotos" component={SignalementPhotos} options={{title: 'Signalement - Photos'}} />
    </Stack.Navigator>
  );
}

function SignalementDetailsNav() {
  return (
    <Stack.Navigator initialRouteName='SignalementDetails' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="SignalementDetailsHome" component={SignalementDetails} options={{title: 'Signaler un problème'}}/>
    </Stack.Navigator>
  )
}

function MenusNav() {
  return (
    <Stack.Navigator initialRouteName='MenusHome' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="MenusHome" component={Menus} options={{title: 'Menus'}}/>
    </Stack.Navigator>
  );
}

function SignalementRenseignementsNav() {
  return (
    <Stack.Navigator initialRouteName='SignalementRenseignements' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="SignalementRenseignementsHome" component={SignalementRenseignements} options={{title: 'Signaler un problème'}}/>
    </Stack.Navigator>
  );
}

function SignalementRecapNav() {
  return (
    <Stack.Navigator initialRouteName='SignalementRecap' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="SignalementRecapHome" component={SignalementRecap} options={{title: 'Signaler un problème'}}/>
    </Stack.Navigator>
  );
}

function SignalementValidNav() {
  return (
    <Stack.Navigator initialRouteName='SignalementValidHome' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="SignalementValidHome" component={SignalementValid} options={{title: 'Cantines'}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={HomeNav} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}