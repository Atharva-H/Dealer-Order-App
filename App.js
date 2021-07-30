import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AccountNavigator from "./app/navigation/AccountNavigator";
import FeedNavigator from "./app/navigation/FeedNavigator";
import HomeNavigator from "./app/navigation/HomeNavigator";

import AccountScreen from "./app/screens/AccountScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen"
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessageScreen from "./app/screens/MessageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import OrderHistoryScreen from "./app/screens/OrderHistoryScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingScreen2 from "./app/screens/ListingScreen2";



export default function App() {
  return (
    
     <NavigationContainer theme={navigationTheme}>
       <AuthNavigator/> 
     </NavigationContainer>
    );
}
