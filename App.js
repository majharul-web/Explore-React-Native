import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, RefreshControl, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, View } from "react-native";


const App = () => {
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];

  return (
    <SafeAreaView>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item} key={Object.key}>
            <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ color: 'black', fontSize: 20, padding: 10, textAlign: 'center' }}>{title}</Text>
        )}
      >

      </SectionList>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  item: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }
})
export default App;
