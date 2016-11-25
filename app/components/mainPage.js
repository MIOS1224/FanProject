'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Navigator,
  Image,
  Animated
} from 'react-native';

import _ from 'underscore'
import TabNavigator from 'react-native-tab-navigator';
import Routes from './navigation/routes'

export default class MainPage extends Component{

  constructor(props) {
    super(props)
    this.state = {
		  selectedTab: 'revearlingBoard',
      bounceBottom: new Animated.Value(0),
		}
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render(){
    return(
      <Animated.View
        style={{
          flex: 1,
          marginBottom: this.state.bounceBottom.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -55]
          }),
        }}>
        <TabNavigator barTintColor="white">
          <TabNavigator.Item
            renderIcon={() => <Image source={require("./img/tab_home.png")} />}
            renderSelectedIcon={() => <Image source={require("./img/tab_home_pre.png")} />}
            title='揭示板'
            selected={this.state.selectedTab == 'revearlingBoard'}
            onPress={() => this.setState({selectedTab: 'revearlingBoard'})}
            selectedTitleStyle={{color: 'red'}}
            >
            {this._renderRootContent('revearlingBoard')}
          </TabNavigator.Item>
          <TabNavigator.Item
            title='中古'
            renderIcon={() => <Image source={require("./img/tab_shop.png")} />}
            renderSelectedIcon={() => <Image source={require("./img/tab_shop_pre.png")} />}
            selected={this.state.selectedTab === 'middleAges'}
            onPress={() => this.setState({selectedTab: 'middleAges'})}
            selectedTitleStyle={{color: 'red'}}
            >
            {this._renderRootContent('middleAges')}
          </TabNavigator.Item>
        </TabNavigator>
      </Animated.View>

    )
  }

  _renderRootContent(name) {
    var initialRoute = {id: name};

    return (
          <Navigator
            ref={v => this.navigator = v}
            initialRoute={initialRoute}
            renderScene={(route, navigator) => Routes.renderScene(route, navigator)}
            configureScene={Routes.configureScene}
            onWillFocus={(route) => this._onWillFocus(route, name)}
          />

    )
  }
    _onWillFocus(route, tabId) {
    // navbar
    // if (_.contains(['discover', 'orders', 'messages', 'introduction', 'mypage'], route.id) || route.navBarHidden) {
    //   this.hideNavBar(tabId);
    // } else {
    //   this.showNavBar(tabId);
    // }

    // tabbar
      if (!_.contains(['shopDetails','editMiddleAge','userProduction'], route.id)) {
        this.showTabBar();
      } else {
        this.hideTabBar();
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
}
