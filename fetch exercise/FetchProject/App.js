import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props){
    super(props);
    this._fetchStory = this._fetchStory.bind(this);
    this._fetchYelp = this._fetchYelp.bind(this);
    this._fetchYelpGet = this._fetchYelpGet.bind(this);
  }
  _fetchStory(){
    fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty');

  }

  _fetchYelp(){

  let data = {
    method: 'POST',
    body: JSON.stringify({
      'client_id': '-qWaHcsd1FNhDOLm5IG1zw',
      'client_secret': '2Z8KwxPhOiPr2NHmXzSGMppsocPykN4wLHaSl59icE0IRNNyEwHfCKO85ZZ071no',
      'grant_type': 'client_credentials'
    }),
    headers: {
      'Accept':       'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return fetch('https://api.yelp.com/oauth2/token', data)
          .then(response => response.json());

  }

  _fetchYelpGet(){
    let data = {
      method: 'GET',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization':'Bearer y3Y6d_hVuQYBVSsBWZPhSJHsGx1uigpSZu5LGYv1Q3jTh6XMpOvaXG0O8NjNpFg5wJ3j2lE96pFTa8AXA7Mffg40PV6sOjbvE2R10Ie3kUz24Y_ONfCVpufsPH0gWnYx'
      }
    }
    return fetch('https://api.yelp.com/v3/businesses/search?term=restaurants&location=37.786882,-122.399972&limit=1', data)
            .then(response => response.json());
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._fetchStory}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._fetchYelp}>
          <Text style={styles.welcome}>
            Checkout Yelp
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._fetchYelpGet}>
          <Text style={styles.welcome}>
            Checkout Yelp
          </Text>
        </TouchableHighlight>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
