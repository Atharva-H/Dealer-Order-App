import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import BagScreen from '../screens/BagScreen';
import HomeScreen from '../screens/HomeScreen';
import AccountNavigator from './AccountNavigator';
import MessageScreen from '../screens/MessageScreen'

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
        name="Feed" 
        component={HomeScreen} 
        options={{
            tabBarIcon: ({color ,size}) => <MaterialCommunityIcons name="home" color={color} size={size} />
        }} />
        <Tab.Screen 
        name="Bag" 
        component={BagScreen}
        options={{
            tabBarIcon: ({color ,size}) => <MaterialCommunityIcons name="cart" color={color} size={size} />
        }}/>
        <Tab.Screen 
        name="Message" 
        component={MessageScreen}
        options={{
            tabBarIcon: ({color ,size}) => <MaterialCommunityIcons name="message" color={color} size={size} />
        }}/>
        <Tab.Screen 
        name="Account" 
        component={AccountNavigator} 
        options={{
            tabBarIcon: ({color ,size}) => <MaterialCommunityIcons name="account" color={color} size={size}  />
        }}/>
    </Tab.Navigator>
)

export default AppNavigator; 