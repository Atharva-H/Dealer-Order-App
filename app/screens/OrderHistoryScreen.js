import React from 'react';
import { View, StyleSheet,FlatList,Image,TouchableOpacity,ScrollView,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Screen from "../components/Screen"
import colors from "../config/colors"
import text from "../config/styles"

import { ListItemSeparator } from '../components/lists';
import Cardorder from '../components/CardOrder';


import ordHis from  '../database/orderHistorydata'





function OrderHistoryScreen(props) {
    return (
        <Screen style={styles.container}>

            
            <View style={styles.searchArea}>
            <View style={styles.logoArea}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                <Text style={styles.pageTitle}>Previous Orders</Text>
                <TouchableOpacity onPress={()=>console.log("Info")}>
                <MaterialCommunityIcons name="dots-vertical" size={30} color={colors.white}/>
                </TouchableOpacity>
            </View>
            </View>

            <ScrollView>
            <ListItemSeparator/>
            <View style={styles.myBag}>
                <FlatList
                    data={ordHis}
                    keyExtractor={(listing) => listing.id.toString()} 
                    
                    renderItem={({ item }) => (
                    
                    <Cardorder
                        ordernum={item.title}
                        value={"₹" + item.price}
                        image={item.image}
                        orderdate = {item.orderdate}
                        status = {item.stat}
                        onPress={()=>console.log(item)}
                    />
                    )}
                />
            </View>
            <ListItemSeparator color="black"/>
            </ScrollView>
        </Screen>
    );
}

export default OrderHistoryScreen;

const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        marginTop:10,
        padding: 5,
        justifyContent: 'space-between'
    },
    container: {
        backgroundColor:colors.light,
    },
    logo: {
        width: 40,
        height: 40,
        backgroundColor: colors.white,
        borderRadius: 5,
        
    },
    logoArea: {
        width:'100%',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    myBag:{
        padding:10,
        paddingBottom:5,
        flexDirection: 'column',
    },
    pageTitle:{
        fontSize: 25,
        fontWeight: "500",
        paddingVertical: 2,
        color: "white",
        fontFamily: text.text.fontFamily,
    },
    searchArea:{
        padding:10,
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    subTotal:{
        padding: 5,
        flexDirection: 'row',
    },

})