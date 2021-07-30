import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessageScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import BagScreen from '../screens/BagScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stact = createStackNavigator();
const AccountNavigator = () => (
    <Stact.Navigator >
        <Stact.Screen name="Account" component={AccountScreen} options={{headerShown: false}} />
        <Stact.Screen name="Orders" component={OrderHistoryScreen} options={{headerShown: false}} />
        <Stact.Screen name="Messages" component={MessagesScreen} options={{headerShown: false}} />
        <Stact.Screen name="BagScreen" component={BagScreen} options={{headerShown: false}} />
        <Stact.Screen name="Log Out" component={WelcomeScreen} options={{headerShown: false}} />
    </Stact.Navigator>
);
export default AccountNavigator;