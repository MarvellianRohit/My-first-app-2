import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component {
  displayAlert = function(){
    alert('Welcome to the World of Coding')
  }
  render() {
    return <Button color="red" title="Click Me" onPress={this.displayAlert} />;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <RedButton />
        <Text>My First React Component</Text>
      </View>
    );
  }
}
