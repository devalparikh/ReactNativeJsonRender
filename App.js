import React from 'react';
import { FlatList, StyleSheet, Text, View, Linking } from 'react-native';
import Header from './src/components/header';
import Button from './src/components/Button';

export default class App extends React.Component {
  state = {
    data: []
  };
  componentWillMount(){
    this.fetchData();
  }
  fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    this.setState({ data: json})

  };
  render() {
    return (

      <View style={styles.container}>
        <Header headerText={'Users:'} />
        <FlatList
          data={this.state.data}
          keyExtractor={(x,i) => i}
          renderItem={({item}) =>
            <View style={styles.container2}>
              <Text style={styles.textStyle}>
                id: {item.id}
              </Text>

              <Text style={styles.textStyleSub}>
                name: {item.name}
              </Text>

              <Text style={styles.textStyleSub}>
                email: {item.email}
              </Text>
              <Text>
              </Text>

              <Button onPress={() => Linking.openURL("mailto: + {item.email}")}>
                Send Email to {item.name}
              </Button>
            </View>
          }
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1694a2',
  },
  textStyle: {
    color: '#f5f5f5',
    fontSize: 18,
    fontWeight: '900'
  },
  container2: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    justifyContent: 'space-between',
    borderColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
  },
  textStyleSub: {
    color: '#f5f5f5',
    fontSize: 16,
    fontWeight: '200'
  },
});
