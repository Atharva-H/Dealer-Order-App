import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stact = createStackNavigator();
const FeedNavigator = () => (
    <Stact.Navigator mode="modal" screenOptions={{headerShown: false}}>
        <Stact.Screen name="Listings" component={ListingsScreen} />
        <Stact.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stact.Navigator>
);
export default FeedNavigator;