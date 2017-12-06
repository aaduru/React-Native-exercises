/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const oauth2 = require('simple-oauth2').create(credentials);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  state = {

  position: 'unknown'

};


componentDidMount() {

  navigator.geolocation.getCurrentPosition(

    (position) => {

      this.setState({position});

    },

    (error) => alert(error),

    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}

  );

}

fetchData() {
  var lat = this.state.position.coords.latitude
    var lng = this.state.position.coords.longitude
    var latlng = "ll=" + String(lat) + "," + String(lng)
    var consumerKey = "*"
    var consumerSecret = "*"
    var tokenSecret = "***"
    var token = "Bearer"

    oauth = new OAuthSimple(consumerKey, tokenSecret)
    request = oauth.sign({
      action: "GET",
      path: "https://api.yelp.com/v2/search",
      parameters: "term=coffee&" + latlng,
      signatures: {api_key: consumerKey, shared_secret: consumerSecret, access_token: token, access_secret: tokenSecret},

    })

    var nav = this.props.navigator

    fetch(request.signed_url, {method: "GET"}).then(function(response){
      return response.json()
    }).then(function(data){
      nav.push({
        ident: "Results",
        data: data
      })
    }).catch(function(error){
      console.log("Error:", error)
    })

  }

  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.welcome}>

          coffee app

        </Text>

        <TouchableOpacity

          style={{borderRadius: 7,padding: 10,  backgroundColor: 'rgb(37, 160, 205)'}}

          onPress={this.fetchData.bind(this)}>

          <Text style={{fontSize: 15}}>Find Coffee!</Text>

        </TouchableOpacity>

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
