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
import Drawer from 'react-native-drawer'
import MyPage from './mine/myPage'
import AppEventEmitter from './common/appEventEmitter.js'

export default class MainPage extends Component{

  constructor(props) {
    super(props)
    this.state = {
		  selectedTab: 'revearlingBoard',
      bounceBottom: new Animated.Value(0),
		}
  }
  componentDidMount() {
    this._listeners = [
      AppEventEmitter.addListener('openDrawer', ()=>this.openDrawer()),
    ];
  }
  componentWillUnmount() {
    _.each(this._listeners, (f) => f.remove());
    this._listeners = undefined;
  }
  openDrawer(){
    this.drawer.open()
  }
  render(){

    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
      main: {paddingLeft: 3},
    }
    return(
      <Animated.View
        style={{
          flex: 1,
          marginBottom: this.state.bounceBottom.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -55]
          }),
        }}>
        <Drawer
          ref={(v)=>this.drawer=v}
          type="overlay"
          content={<MyPage />}
          tapToClose={true}
          openDrawerOffset={0.4}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          >
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
        </Drawer>

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
      if (!_.contains(['shopDetails','editMiddleAge','userProduction','revearlingBoardDetail','revearlingBoardInfo'], route.id)) {
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
