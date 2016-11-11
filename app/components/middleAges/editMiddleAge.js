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
import NavigationBar from 'react-native-navbar'
import _ from 'underscore'
import LeftBarButton from '../common/leftBarButton'
import {Device} from '../components.js'
var {DeviceWidth,DeviceHeight} = Device

class EditMiddleAge extends Component{

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
    var rightButtonConfig = {
      title: '编辑',
      tintColor: 'red',
      handler: () => {

      }
    }
    return(
      <View style={styles.container}>
      <NavigationBar
        title={{title:'2016春CON应援扇'}}
        leftButton = {<LeftBarButton onPress={() => this.context.page.navigator.pop()}
        />}
        rightButton={rightButtonConfig}
        />

      </View>
    )
  }
  contactAction(){

  }
}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
  contactStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 15,
    height: 40,
    borderRadius: 4
  }
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(EditMiddleAge);
