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

class MySetting extends Component{

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
        title={{title:'设置'}}
        leftButton = {<LeftBarButton onPress={() => this.context.app.navigator.pop()}
        />}
        />
        <TouchableOpacity onPress={()=>this.commitAdvice()}>
          <View style={{margin: 10}}>
            <Text>意见
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginout} onPress={()=>this.loginout()}>
          <View>
            <Text style={{color: '#ffffff'}}>退出账号
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  commitAdvice(){
    this.context.app.navigator.push({
      id: 'advice'
    })
  }
  loginout(){

  }
}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#efefef'
  },
  loginout: {
    position: 'absolute',
    left:20,
    right: 20,
    height: 50,
    bottom: 20,
    backgroundColor: '#eb6878',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  }
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(MySetting);
