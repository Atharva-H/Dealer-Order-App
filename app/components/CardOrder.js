import React from "react";
import { View, StyleSheet, Image, onPress } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import PlusButton from "./PlusButton";


function Cardorder({ ordernum, value, image, orderdate,status, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <View style={styles.id}>
          <AppText style={styles.title}>{ordernum}</AppText>
          <AppText style={styles.subTitle}>{value}</AppText>
        </View>
        <AppText>Order Date: {orderdate} </AppText>
        <AppText>Status: {status} </AppText>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    add:{
    backgroundColor:colors.light,
    width: '12%',
    alignItems: 'center',
    },
    card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    marginRight:10,
    width: "100%",
    overflow: "hidden",
    flexDirection: 'row',

  },
  detailsContainer: {
    padding: 20,
  },
  id:{
    flexDirection:"row",
    justifyContent: 'space-between'
  },
  image: {
    width: 120,
    height: 120,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Cardorder;
