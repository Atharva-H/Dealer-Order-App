import React from 'react';
import { View, StyleSheet,FlatList,Image,TouchableOpacity,ScrollView,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Screen from "../components/Screen"
import colors from "../config/colors"
import text from "../config/styles"

import AppTextInput from '../components/AppTextInput';
import CategoryCard from '../components/CategoryCard';
import { ListItemSeparator } from '../components/lists';
import CardShort from '../components/CardShort';
import AppText from '../components/AppText';

import productCatogery from '../database/productCatogerydata'
import newlyAdded from  '../database/newlyAddeddata'
import trendingProducts from '../database/trendingProductsdata' 


function HomeScreen({navigation}) {
    return (
        <Screen style={styles.container}>
            <ScrollView>
            <View style={styles.searchArea}>
            <View style={styles.logoArea}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                <Text style={styles.pageTitle}>HOME</Text>
                <TouchableOpacity onPress={() => console.log("Filter") }>
                <MaterialCommunityIcons name="filter-menu" size={30} color={colors.white}/>
                </TouchableOpacity>
            </View>
            <AppTextInput icon='card-search'  placeholder="Search"/>
            </View>


            <View style={styles.category}>
            <FlatList
                data={productCatogery}
                keyExtractor={(listing) => listing.id.toString()}
                horizontal= {true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CategoryCard icon={item.icon} title={item.title} onPress={() => console.log(item) } />
                )
            }
            />
            </View>
            <ListItemSeparator/>
            <View style={styles.newAddedSection}>
                <AppText style={{margin:5}}>Newly Added Products</AppText>
                <FlatList
                    data={newlyAdded}
                    keyExtractor={(listing) => listing.id.toString()}
                    //numColumns={2}
                    horizontal= {true}
                    renderItem={({ item }) => (
                    
                    <CardShort
                        title={item.title}
                        subTitle={"₹" + item.price}
                        image={item.image}
                        onPress={()=>console.log(item)}
                    />
                    )}
                />
            </View>
            <ListItemSeparator color="black"/>
            <View style={styles.newAddedSection}>
                <AppText style={{margin:5}}>Trending Products</AppText>
                <FlatList
                    data={trendingProducts}
                    keyExtractor={(listing) => listing.id.toString()}
                    //numColumns={2}
                    horizontal= {true}
                    renderItem={({ item }) => (
                    
                    <CardShort
                        title={item.title}
                        subTitle={"₹" + item.price}
                        image={item.image}
                        onPress={()=>console.log(item)}
                    />
                    )}
                />
            </View>
            
            </ScrollView>

        </Screen>
    );
}

export default HomeScreen;

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
    newAddedSection:{
        padding:10,
        paddingBottom:5
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
})