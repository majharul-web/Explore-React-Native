import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";


const App = () => {
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 14, item: 'Item 14' }]);
    setRefreshing(false);
  }
  const [Items, setItems] = useState([
    { key: 1, item: 'Item 1' },
    { key: 2, item: 'Item 2' },
    { key: 3, item: 'Item 3' },
    { key: 4, item: 'Item 4' },
    { key: 5, item: 'Item 5' },
    { key: 6, item: 'Item 6' },
    { key: 7, item: 'Item 7' },
    { key: 8, item: 'Item 8' },
    { key: 9, item: 'Item 9' },
    { key: 10, item: 'Item 10' },
    { key: 11, item: 'Item 11' },
    { key: 12, item: 'Item 12' },
    { key: 13, item: 'Item 13' },
  ]);

  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {
        Items.map((Object) => {
          return (
            <View style={styles.item} key={Object.key}>
              <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>{Object.item}</Text>
            </View>
          )
        })
      }
    </ScrollView >
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
