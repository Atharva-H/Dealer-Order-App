
import React, { useRef } from 'react';
import { View, StyleSheet,Image,TouchableOpacity,ScrollView, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from "../config/colors"
import Screen from "../components/Screen"
import text from "../config/styles"

import AppTextInput from '../components/AppTextInput';
import TextSend from '../components/message/TextSend';
import TextRecive from '../components/message/TextRecive'



export default function MessageScreen() {
  const scrollViewRef = useRef();
  return (
    <Screen style={styles.container}>
            <View style={styles.headerArea}>
            <View style={styles.logoArea}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                <Text style={styles.pageTitle}>Customer Care</Text>
                <TouchableOpacity onPress={()=>console.log("Info")}>
                <MaterialCommunityIcons name="dots-vertical" size={30} color={colors.light}/>
                </TouchableOpacity>
            </View>
            </View>
            <ScrollView style={styles.messageArea} ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: false })}>
                <TextRecive>Payment Done. Pls check & let me know.</TextRecive>
                <TextSend>Payment Recived. Order is ready & will be dispached on Monday.</TextSend>
                <TextSend>Vehical No. MH 04 ST 1954</TextSend>
                <TextRecive>Okay.</TextRecive>
                <TextRecive>Pls Send Bill copy.</TextRecive>
                <TextSend>I have mailed u Roadway bill.</TextSend>
                <TextSend>Anything else?</TextSend>
                <TextRecive>Bill Recived.</TextRecive>
                <TextRecive>thanks</TextRecive>
                            </ScrollView>
            <View style={styles.textArea}>
            <View style={styles.textBar}>
                <AppTextInput icon='attachment' placeholder="Type your message"/>
                <TouchableOpacity onPress={()=>console.log("Send")}>
                 <MaterialCommunityIcons name="send-circle" size={50} color={colors.primary}/>
                </TouchableOpacity>
            </View>
            </View>
      </Screen>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor:colors.light,
    flexDirection: 'column',
    justifyContent:'space-between',
    height:'100%',
    
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
    justifyContent: 'space-between',
},
messageArea:{
   
},
headerArea:{
    padding:10,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
},
pageTitle: {
  fontSize: 25,
  fontWeight: "600",
  paddingVertical: 2,
  color: "white",
  fontFamily: text.text.fontFamily,
},
textArea:{
    width:'100%',
    backgroundColor: colors.secondary,
    padding:5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
},
textBar: {
    width:'90%',
    padding:5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
},
});
