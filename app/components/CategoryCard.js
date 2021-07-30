import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

function CategoryCard({ icon, title, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.categoryCard}>
                <MaterialCommunityIcons name={icon} size={30} color={colors.white}/>
            </View>
            <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryCard: {
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:colors.dark,
        justifyContent:'center',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        marginLeft:10,
        marginRight:10
    },
    text:{
        textTransform: 'uppercase',
        fontSize: 15
    },
})
export default CategoryCard;