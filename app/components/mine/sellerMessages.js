'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions'
import _ from 'underscore'
import Segment from '../common/segment.js'
import LeftBarButton from '../common/leftBarButton'
import {Device} from '../components.js'
var {DeviceWidth,DeviceHeight} = Device

class SellerMessages extends Component{

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
        <Segment />
        <Segment />

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
)(SellerMessages);
