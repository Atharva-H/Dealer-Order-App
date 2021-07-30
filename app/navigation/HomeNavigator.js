import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessageScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import BagScreen from '../screens/BagScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Stact = createStackNavigator();
const HomeNavigator = () => (
    <Stact.Navigator >
        <Stact.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stact.Screen name="Listing" component={ListingsScreen} options={{headerShown: false}} />
        <Stact.Screen name="Messages" component={MessagesScreen} options={{headerShown: false}} />
        <Stact.Screen name="BagScreen" component={BagScreen} options={{headerShown: false}} />
        <Stact.Screen name="Log Out" component={WelcomeScreen} options={{headerShown: false}} />
    </Stact.Navigator>
);
export default HomeNavigator;