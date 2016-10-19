'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated
} from 'react-native';

export default class AppContainer extends Component{

  static childContextTypes = {
    app: React.PropTypes.object
  }

  getChildContext() {
    return {
      app: {
        navigator: this.props.navigator,
        showTabBar: this.showTabBar,
        hideTabBar: this.hideTabBar,
      }
    }
  }
  showTabBar() {
    Animated.timing(
      this.state.bounceBottom,
      {
        toValue: 0,
        duration: 350,
      }
    ).start();
  }

  hideTabBar() {
    Animated.timing(
      this.state.bounceBottom,
      {
        toValue: 1,
        duration: 350,
      }
    ).start();
  }

  constructor(props) {
    super(props)
    this.state={
      bounceBottom: new Animated.Value(0),
    }

  }

  render(){
    return(
      <Animated.View
          style={{
            flex: 1,
            marginBottom: this.state.bounceBottom.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -50]
            }),
            backgroundColor: 'white',
          }}
          >
          {this.props.children}
      </Animated.View>
    )
  }
}
