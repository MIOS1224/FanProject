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
    return(
      <View style={styles.container}>
      <NavigationBar
        title={{title:'修改2016春CON应援扇'}}
        leftButton = {<LeftBarButton onPress={() => this.context.page.navigator.pop()}
        />}
        />
        <View>
          <Text onPress={()=>this.selectPhoto()}>选择照片
          </Text>
          <Text style={{marginTop: 30}}>标题
          </Text>
          <Text style={{marginTop: 30}}>描述
          </Text>
          <Text style={{marginTop: 30}}>爱豆
          </Text>
          <Text style={{marginTop: 30}}>分类
          </Text>
          <Text style={{marginTop: 30}}>出售状态
          </Text>
          <TouchableOpacity onPress={()=>this.confirmAction()}>
            <View style={styles.confirmStyle}>
             <Text>确认
             </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  selectPhoto(){
    
  }
  confirmAction(){

  }
}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
  confirmStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 30,
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
