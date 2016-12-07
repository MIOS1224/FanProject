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
import Review from '../common/review.js'
var {DeviceWidth,DeviceHeight} = Device

class RevearlingBoardDetail extends Component{

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
        <Text style={{opacity: 0.5}}>6467views  877cmt   16-06-15  13:27
        </Text>
        <Text>Beautiful  World  周间第一
        </Text>
        <Text>This is probably my favorite navigation pattern on Android, I wish it were more common on iOS! This is a very simple JavaScript-only implementation of it for React Native. For more information about how the animations behind this work, check out the Rebound section of the React Native Animation Guide
        </Text>
        <Review/>
        <Review/>
        <Review/>

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
)(RevearlingBoardDetail);
