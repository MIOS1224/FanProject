'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions'
import NavigationBar from 'react-native-navbar'
import _ from 'underscore'
import {Device} from '../components.js'
var {DeviceWidth,DeviceHeight} = Device

export default class MyCell extends Component{

  static contextTypes = {
    app: React.PropTypes.object,
    page: React.PropTypes.object
  }

  constructor(props) {
    super(props)
  }
  componentDidMount(){
  }
  render(){

    return(
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          {this.props.image}
          <Text style={{marginLeft: 20}}>{this.props.title}
          </Text>
        </View>
      </TouchableOpacity>

    )
  }

}

var styles= StyleSheet.create({
  container:{
    height: 50,
    marginBottom: 5,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },

})
