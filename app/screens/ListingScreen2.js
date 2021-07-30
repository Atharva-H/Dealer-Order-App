import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import tempdata from "../database/tempData"
import AppText from "../components/AppText";
import { ScrollView } from 'react-native-gesture-handler';

function ListingsScreen2({navigation}) {


  return (
    <ScrollView>
    <Screen style={styles.screen}>
        
      <AppText style={styles.sizeTitle}>HotCup</AppText>
      <AppText style={styles.categoryName}>40ml</AppText>
        <FlatList data={tempdata} 
          keyExtractor={(item) => item.id} 
          numColumns='2'
          renderItem={({item}) => (  
                  <Card 
                    title={item.cupDesign}
                    price={item.price}
                    image={item.image}
                    pkgquantity={item.pkgQuantity}
                    onPress={()=> console.log({item})}
                  />
                        
          )
          }
          />
      <AppText style={styles.categoryName}>55ml</AppText>
        <FlatList data={tempdata} 
          keyExtractor={(item) => item.id.toString()} 
          numColumns='2'
          renderItem={({ item }) => (               
                  <Card 
                    title={item.cupDesign}
                    price={item.price}
                    image={item.image}
                    pkgquantity={item.pkgQuantity}
                    onPress={()=> console.log({item})}
                  />
          )
          }
          />
          
    </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
    flex:1
  },
  sizeTitle:{
    fontSize:15,
    color: colors.medium
  },
  categoryName:{
    fontSize:20,
    textTransform:'uppercase',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export default ListingsScreen2;
