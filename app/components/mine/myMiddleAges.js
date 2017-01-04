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

class MyMiddleAges extends Component{

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
        title={{title:'中古收藏'}}
        leftButton = {<LeftBarButton onPress={() => this.context.app.navigator.pop()}
        />}
        />
        <View style={styles.view}>
        {
          _.map([1,2,3,4,5,6],(item,index)=>{
            return(
                <View style={styles.itemStyle} key={item}>
                <TouchableOpacity onPress={()=>this.shopPress()}>

                  <Image source={require('../img/mimeii.jpg')}
                          style={{width: DeviceWidth/2-30,height: DeviceWidth/2-30}}/>
                  <Text style={{marginTop: 5}}>2016春CON应援扇
                  </Text>
                  <Text style={{marginTop: 5,opacity: 0.5}}>90元
                  </Text>
                  </TouchableOpacity>

                </View>
            )
          })
        }
        </View>
      </View>
    )
  }
  shopPress(){
    
  }

}
var widths = DeviceWidth/2-30;
var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#efefef'
  },
  view: {
    marginTop: 10,
    width:DeviceWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginBottom: 5,
    backgroundColor: '#ffffff',
    width: widths,
    height: widths+50
  }
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(MyMiddleAges);
