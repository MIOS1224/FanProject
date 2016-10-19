
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';

import MainPage from './mainPage';
import AppContainer from './app_container.js'

import _ from 'underscore'

export default class RootPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstOpen: false,
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <Navigator
        ref={v => this.rootNavigator = v}
        renderScene={(route,navigator)=>this.renderScene(route, navigator)}
        initialRoute={{id: 'mainPage'}}
        configureScene={this.configureScene}
      />
    )
  }

  configureScene(route) {
    if (route.id=='login') {
      return Navigator.SceneConfigs.FloatFromBottom
    }else {
      return Navigator.SceneConfigs.PushFromRight
    }
  }

  renderScene(route, navigator) {

    var viewProps = {};
    if (route.data) {
      _.extend(viewProps, route.data);
    }
    var props = {navigator:navigator};
    switch (route.id) {
      case 'mainPage':
        return <AppContainer {...props}><MainPage showIntroduction={!this.state.firstOpen}/></AppContainer>
        break;
      case 'login':
        return <AppContainer {...props}><LoginPage {...viewProps}/></AppContainer>
        break;
    }
    return (
      <View style={{top: 100}}>
        <Text>Hello.{'\n'}{route.id} page is not found.</Text>
      </View>
    )
  }
}
