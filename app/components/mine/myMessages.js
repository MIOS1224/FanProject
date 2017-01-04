'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions'
import NavigationBar from 'react-native-navbar'
import _ from 'underscore'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import LeftBarButton from '../common/leftBarButton'
import PrivateMessages from './privateMessages'
import SellerMessages from './sellerMessages'
import {Device} from '../components.js'
var {DeviceWidth,DeviceHeight} = Device

class MyMiddleAges extends Component{

  static contextTypes = {
    app: React.PropTypes.object,
  }

  constructor(props) {
    super(props)
  }
  componentDidMount(){

  }
  render(){

    return(
      <View style={styles.container}>
      <NavigationBar
        title={{title:'消息'}}
        leftButton = {<LeftBarButton onPress={() => this.context.app.navigator.pop()}
        />}
        />
        <ScrollableTabView
          scrollWithoutAnimation={true}
          tabBarActiveTextColor='red'
          tabBarUnderlineStyle={{backgroundColor: 'red'}}
        >
          <PrivateMessages tabLabel="私信" />
          <SellerMessages tabLabel="卖家留言" />
        </ScrollableTabView>
      </View>
    )
  }

}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#efefef'
  },

})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(MyMiddleAges);
