import React from "react";
import { View, StyleSheet, Image, onPress } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import PlusButton from "./PlusButton";


function CardShort({ title, subTitle,quant, image, pkg, onPress,onPressadd,onPresssub  }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        <AppText >Pkg-{pkg} cups</AppText>
      </View>
      <View style={styles.add}>
            <PlusButton title="+" onPress={onPressadd}/>
            <AppText style={styles.subTitle}>{quant}</AppText>
            <PlusButton title="-" onPress={onPresssub}/>
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
    justifyContent: 'space-between',
  },
  detailsContainer: {
    padding: 20,
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

export default CardShort;
