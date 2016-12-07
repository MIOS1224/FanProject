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
import {Device} from '../components.js'
import LeftBarButton from '../common/leftBarButton'
import Segment from '../common/segment.js'
var {DeviceWidth,DeviceHeight} = Device

class RevearlingBoardInfo extends Component{

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
        <Image source={require('../img/touxiang.jpeg')} style={{width:DeviceWidth,height:150}} resizeMode='stretch'/>
        <Text style={{opacity: 0.5}}>会员人数：7440人
        </Text>
        <Segment/>
        <Segment/>
        <Segment/>

      </View>
    )
  }

}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
  contents: {
    marginTop: 50
  }
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(RevearlingBoardInfo);
