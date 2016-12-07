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
import Segment from '../common/segment.js'
import _ from 'underscore'
import {Device} from '../components.js'
var {DeviceWidth,DeviceHeight} = Device

class JohnnyPage extends Component{

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
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('../img/touxiang.jpeg')} style={{width:DeviceWidth,height:150}} resizeMode='stretch'/>
          <Text>最新
          </Text>
          <Segment/>
          <Segment/>
          <Segment/>
          <Text>分区
          </Text>
          <View style={styles.view}>
          {
            _.map([1,2,3,4,5,6,7,8,9,10],(item,index)=>{
              return(
                  <View style={styles.itemStyle} key={item}>
                  <TouchableOpacity onPress={()=>this.onPress()}>
                    <Image source={require('../img/touxiang.jpeg')}
                            style={styles.imageStyle}>
                    <Text style={styles.nameStyle}>波多野结衣
                    </Text>
                    </Image>
                    </TouchableOpacity>

                  </View>
              )
            })
          }
          </View>
        </View>
      </ScrollView>

    )
  }
  onPress(){
    this.context.page.navigator.push({
      id: 'revearlingBoardInfo'
    })
  }
}

var widths = (DeviceWidth-40)/3;

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#efefef'
  },
  contents: {
    marginTop: 50
  },
  view: {
    width:DeviceWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginBottom: 5,
    backgroundColor: '#ffffff',
    width: widths,
    height: widths
  },
  imageStyle: {
    width: widths,
    height:widths,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(JohnnyPage);
