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
import SignalementCamera from '../screens/SignalementCamera';

const Stack = createNativeStackNavigator();

function HomeNav() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Laval Dans Ma Poche'}} />
      <Stack.Screen name="Cantines" component={CantinesNav} options={{headerShown: false}} />
      <Stack.Screen name="Signalement" component={SignalementNav} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function CantinesNav() {
  return (
    <Stack.Navigator initialRouteName='CantinesHome' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="CantinesHome" component={Cantines} options={{title: 'Cantines'}}/>
      <Stack.Screen name="Menus" component={Menus} options={{title: 'Menus'}}/>
    </Stack.Navigator>
  );
}

function SignalementNav() {
  return (
    <Stack.Navigator initialRouteName='SignalementHome' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#ffffff'}}}>
      <Stack.Screen name="SignalementHome" component={Signalement} options={{title: 'Signalement'}}/>
      <Stack.Screen name="SignalementDetails" component={SignalementDetails} options={{title: 'Signaler un problème'}}/>
      <Stack.Screen name="SignalementPhotos" component={SignalementPhotos} options={{title: 'Signalement - Photos'}} />
      <Stack.Screen name="SignalementCamera" component={SignalementCamera} options={{title: 'Signalement - Camera'}} />
      <Stack.Screen name="SignalementRenseignements" component={SignalementRenseignements} options={{title: 'Signaler un problème'}}/>
      <Stack.Screen name="SignalementRecap" component={SignalementRecap} options={{title: 'Signaler un problème'}}/>
      <Stack.Screen name="SignalementValid" component={SignalementValid} options={{title: 'Signaler un problème'}}/>
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