import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "My Orders",
    icon: {
      name: "package-variant-closed",
      backgroundColor: colors.primary,
    },
    targetScreen: "Orders"
  },
  {
    title: "My Messages",
    icon: {
      name: "message",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages"
  },
  {
    title: "My Bag",
    icon: {
      name: "cart",
      backgroundColor: colors.medium,
    },
    targetScreen: "BagScreen"
  },
  {
    title: "Settings",
    icon: {
      name: "tools",
      backgroundColor: colors.dark,
    },
    targetScreen: "Settings"
  },
  {
    title: "Log Out",
    icon: {
      name: "logout",
      backgroundColor: "#ffe66d",
    },
    targetScreen: "Welcome"
  },
];

function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Atharva Humar"
          subTitle="atharvahumar@gmail.com"
          image={require("../assets/pp.jpg")}
          onPress={()=>console.log("item")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      {/* <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
