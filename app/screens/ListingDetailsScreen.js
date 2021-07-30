import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({route}) {

  return (
    <View>
      <Image style={styles.image} source={require("../assets/Sea.png")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>200ml Multi Color</AppText>
        <AppText style={styles.price}>$ 200 </AppText>
        </View>
        <View style={styles.userContainer}>
          <AppText style={styles.pkg}>Pkg- 4000 Cups</AppText>
          <AppText>Shop Paper Bowls With Lids at Paricott Paper Cups India , your resource for restaurant supplies and equipment. Order today for fast shipping, wholesale pricing and superior service.</AppText>
          <AppText/>
          <AppText>Weight- 17.5Kg</AppText>
          <AppText>Box Size- 350x250x380mm</AppText>
        </View>
        <AppButton title="Add to Bag" onPress={()=>console.log("Add to Bag")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: "50%",
  },
  pkg:{
    fontSize: 20,
    fontWeight: "100",
    marginBottom:10,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
  },
  userContainer: {
    paddingHorizontal:20,
  },
});

export default ListingDetailsScreen;
