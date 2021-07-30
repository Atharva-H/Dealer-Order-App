import React from "react";
import { Text,StyleSheet, View } from "react-native";
import colors from "../../config/colors";

import defaultStyles from "../../config/styles";

function TextSend({ children }) {
  return (
    <View style={styles.message}>
      <Text style={styles.messageBox}>{children}</Text>
    </View>

  )
}

export default TextSend;

const styles = StyleSheet.create({
  message: {
    padding: 10,
    flexDirection:'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  messageBox: {
    paddingVertical: 10,
    paddingHorizontal:15,
    backgroundColor: colors.secondarylow,
    width: '80%',
    borderRadius: 10,
    color: colors.light,
    fontSize:18,
  },
});