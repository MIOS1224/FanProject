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

    return(
      <View style={styles.container}>
        <View style={styles.navStyle}>
          <View style={styles.navView}>
            <Image  source={require('../img/drawer_id.png')}/>
            <Text style={{color: '#ffffff'}}>帅哥前
            </Text>
            <Image source={require('../img/drawer_edit.png')}/>
          </View>
        </View>
        <MyCell onPress={()=>this.pushAction('myPosts')} title='帖子收藏' image={<Image style={{marginLeft: 10}} source={require('../img/drawer_favorite.png')}/>} />
        <MyCell onPress={()=>this.pushAction('myMiddleAges')} title='中古收藏' image={<Image style={{marginLeft: 10}} source={require('../img/drawer_favorite.png')}/>} />
        <MyCell onPress={()=>this.pushAction('myMessages')} title='消息' image={<Image style={{marginLeft: 10}} source={require('../img/drawer_tongzhi.png')}/>} />
        <MyCell onPress={()=>this.pushAction('mySetting')} title='设置' image={<Image style={{marginLeft: 10}} source={require('../img/drawer_shezhi.png')}/>} />
      </View>
    )
  }

  pushAction(pageID){
    this.context.app.navigator.push({
      id: pageID
    })
  }
}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#efefef'
  },
  navStyle: {
    height: 64,
    width: DeviceWidth*3/5,
    backgroundColor: '#eb6878'
  },
  navView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 30,
    alignItems: 'center',

  }
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(MyPage);
