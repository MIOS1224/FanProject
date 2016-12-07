'use strict';

import React, {Component} from 'react';
import {StyleSheet,Text,View,Navigator} from 'react-native';
import _ from 'underscore'
import RevearlingBoard from '../revearlingBoard/revearlingBoardPage.js';
import MiddleAges from '../middleAges/middleAgesPage.js';
import ContextWrapper from './context_wrapper.js';
import ShopDetails from '../middleAges/shopDetails.js';
import EditMiddleAge from '../middleAges/editMiddleAge.js'
import UserProduction from '../middleAges/userProduction.js'
import RevearlingBoardDetail from '../revearlingBoard/revearlingBoardDetail.js'
import RevearlingBoardInfo from '../revearlingBoard/revearlingBoardInfo.js'

export default class Routes extends Component{

  static renderScene(route, navigator, props = {}) {

    if (route.component) {
      return route.component
    }
    var props = {
      context: {navigator}
    }

    var viewProps = {};

    if (route.data) {
      _.extend(viewProps, route.data);
    }
    switch (route.id) {
      case 'revearlingBoard':
        return <ContextWrapper {...props}><RevearlingBoard {...viewProps}/></ContextWrapper>
      case 'middleAges':
        return <ContextWrapper {...props}><MiddleAges {...viewProps}/></ ContextWrapper>
      case 'shopDetails':
        return <ContextWrapper {...props}><ShopDetails {...viewProps}/></ ContextWrapper>
      case 'editMiddleAge':
        return <ContextWrapper {...props}><EditMiddleAge {...viewProps}/></ ContextWrapper>
      case 'userProduction':
        return <ContextWrapper {...props}><UserProduction {...viewProps}/></ ContextWrapper>
      case 'revearlingBoardDetail':
        return <ContextWrapper {...props}><RevearlingBoardDetail {...viewProps}/></ ContextWrapper>
      case 'revearlingBoardInfo':
        return <ContextWrapper {...props}><RevearlingBoardInfo {...viewProps}/></ ContextWrapper>
    }

    return <View style={{top: 100}}><Text>Hello.{'\n'}{route.id} page is not found.</Text></View>
  }

  configureScene(route) {
    return Navigator.SceneConfigs.FloatFromRight;
  }

}
