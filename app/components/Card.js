import React from "react";
import { View, StyleSheet, Image, onPress } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";


function Card({ title, price, image,pkgquantity, onPress  }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <View style={styles.details}>
          <AppText style={styles.subTitle}>{price}</AppText>
          <AppText style={styles.pkg}>{pkgquantity}</AppText>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    overflow: "hidden",
    width: '48%',
    margin:5,
  },
  details: {
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: 180,
    height: 180,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
