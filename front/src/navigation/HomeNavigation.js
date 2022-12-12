import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 

import Home from '../screens/Home'
import Shop from '../screens/Shop'
import Profil from '../screens/Profil'
import Cantines from '../screens/Cantines'

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#fffff'}}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Laval Dans Ma Poche'}} />
      <Stack.Screen name="Profil" component={Profil} options={{title: 'Profil'}} />
    </Stack.Navigator>
  );
}

function ShopNav() {
  return (
    <Stack.Navigator initialRouteName='Shop' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#fffff'}}}>
      <Stack.Screen name="Shop" component={Shop} options={{title: 'Shop'}} />
    </Stack.Navigator>
  );
}

function CantinesNav() {
  return (
    <Stack.Navigator initialRouteName='Cantines' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#C30065'}, headerTitleStyle: {color: '#fffff'}}}>
      <Stack.Screen name="Cantines" component={Cantines} options={{title: 'Cantines'}}/>
    </Stack.Navigator>
  );
}

function BottomNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="ListeMatchsBottom" backBehavior='none' screenOptions={{headerShown: false, tabBarHideOnKeyboard: true, tabBarStyle: {backgroundColor: '#C30065'}, tabBarActiveTintColor: '#ffffff', tabBarLabelStyle: {fontSize: 15}}}>
      <BottomTab.Screen
        name="HomeButton"
        component={HomeNav}
        options={{
          title: 'Home',
          tabBarIcon: () => {return <FontAwesome name="home" size={30} color="white"/>}
        }} 
      />
      <BottomTab.Screen 
        name="ShopButton" 
        component={ShopNav}
        options={{
          title: 'Shop',
          tabBarIcon: () => {return <FontAwesome name="shopping-cart" size={30} color="white"/>}
        }}
      />
      <BottomTab.Screen 
        name="AddButton" 
        component={CantinesNav}
        options={{
          title: 'Cantines',
          tabBarIcon: () => {return <FontAwesome name="spoon" size={30} color="white"/>}
        }}
      />
      <BottomTab.Screen 
        name="FriendsButton" 
        component={HomeNav}
        options={{
          title: 'Friends',
          tabBarIcon: () => {return <FontAwesome name="comments" size={30} color="white"/>}
        }}
      />
      <BottomTab.Screen 
        name="ProfilButton" 
        component={HomeNav}
        options={{
          title: 'Profil',
          tabBarIcon: () => {return <FontAwesome name="user" size={30} color="white"/>}
        }}
      />
    </BottomTab.Navigator>
  );
}



export default function App() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={BottomNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}