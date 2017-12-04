1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
import React, { Component } from 'react';

import { AppRegistry } from 'react-native'

import AppNavigator from './app/navigation/AppNavigator'

class coffeeapp extends Component {

 render() {

   return (

         <AppNavigator

           initialRoute={{ident: "Search"}} />

   )

 }

}

AppRegistry.registerComponent('coffeeapp', () => coffeeapp)
