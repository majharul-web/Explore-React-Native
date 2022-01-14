import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";


const App = () => {
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 14, item: 'Item 14' }]);
    setRefreshing(false);
  }
  const [Items, setItems] = useState([
    { item: 'Item 1' },
    { item: 'Item 2' },
    { item: 'Item 3' },
    { item: 'Item 4' },
    { item: 'Item 5' },
    { item: 'Item 6' },
    { item: 'Item 7' },
    { item: 'Item 8' },
    { item: 'Item 9' },
    { item: 'Item 10' },
    { item: 'Item 11' },
    { item: 'Item 13' },
    { item: 'Item 12' },
  ]);

  return (

    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({ item }) => (
        <View style={styles.item} key={Object.key}>
          <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>{item.item}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
    />
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
