'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions'
import NavigationBar from 'react-native-navbar'
import LeftBarButton from '../common/leftBarButton'
import MyCell from './myCell'
import _ from 'underscore'
import {Device} from '../components.js'
var {DeviceWidth,DeviceHeight} = Device

class MyPage extends Component{

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
        title: '提交',
        tintColor: '#ff4068',
        handler: () => {

        }
      }
    return(
      <View style={styles.container}>
        <NavigationBar
          title={{title:'意见'}}
          leftButton = {<LeftBarButton onPress={() => this.context.app.navigator.pop()}
          />}
          rightButton={rightButtonConfig}
          />
          <TextInput
          style={styles.textInput}
          placeholder="写写你希望增加的红能，建议，吐槽等吧"
          autoCorrect={false}
          autoCapitalize='none'
          multiline={true}
          onChangeText={(value)=>this.onChangeText(value)}
          />
      </View>
    )
  }
  onChangeText(){

  }
}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#efefef'
  },
  textInput: {
    width: DeviceWidth-20,
    height: 200,
    marginLeft: 10,
    marginTop: 20,
    fontSize: 18,
    backgroundColor: '#ffffff',
    padding: 10
  }
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(MyPage);
