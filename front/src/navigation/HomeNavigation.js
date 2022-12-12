import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 

import Home from '../screens/Home'
import Shop from '../screens/Shop'
import Profil from '../screens/Profil'

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#ffda00'}, headerTitleStyle: {color: '#1c3969'}}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Laval Dans Ma Poche'}} />
      <Stack.Screen name="Profil" component={Profil} options={{title: 'Profil'}} />
    </Stack.Navigator>
  );
}

function ShopNav() {
  return (
    <Stack.Navigator initialRouteName='Shop' screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#ffda00'}, headerTitleStyle: {color: '#1c3969'}}}>
      <Stack.Screen name="Shop" component={Shop} options={{title: 'Shop'}} />
    </Stack.Navigator>
  );
}

function BottomNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="ListeMatchsBottom" backBehavior='none' screenOptions={{headerShown: false, tabBarHideOnKeyboard: true, tabBarStyle: {backgroundColor: '#ffda00'}, tabBarActiveTintColor: '#1c3969', tabBarLabelStyle: {fontSize: 15}}}>
      <BottomTab.Screen
        name="HomeButton"
        component={HomeNav}
        options={{
          title: 'Home',
          tabBarIcon: () => {return <FontAwesome name="home" size={30} color="black"/>}
        }} 
      />
      <BottomTab.Screen 
        name="ShopButton" 
        component={ShopNav}
        options={{
          title: 'Shop',
          tabBarIcon: () => {return <FontAwesome name="shopping-cart" size={30} color="black"/>}
        }}
      />
      <BottomTab.Screen 
        name="AddButton" 
        component={HomeNav}
        options={{
          title: 'Add Name',
          tabBarIcon: () => {return <FontAwesome name="plus" size={30} color="black"/>}
        }}
      />
      <BottomTab.Screen 
        name="FriendsButton" 
        component={HomeNav}
        options={{
          title: 'Friends',
          tabBarIcon: () => {return <FontAwesome name="comments" size={30} color="black"/>}
        }}
      />
      <BottomTab.Screen 
        name="ProfilButton" 
        component={HomeNav}
        options={{
          title: 'Profil',
          tabBarIcon: () => {return <FontAwesome name="user" size={30} color="black"/>}
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