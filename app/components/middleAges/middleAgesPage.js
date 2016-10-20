'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  ListView,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import NavigationBar from 'react-native-navbar';
import _ from 'underscore';
import {Device} from '../components.js'
var {DeviceWidth,DeviceHeight} = Device
import MenuList from '../utils/tabs.js';

class MiddleAges extends Component{

  static contextTypes = {
    app: React.PropTypes.object,
    page: React.PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state={
      leftClick: false,
      rightClick: false,
    }
  }
  componentDidMount(){
  }
  render(){
    var data = {
      "Language": {
        "All": ["All"],
        "Web Front End": [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        "Server": [
          "Node.js",
          "PHP",
          "Python",
          "Ruby"
        ]
      },
      "Tool":{
        "All": ["All"],
        "Apple": ["Xcode"],
        "Other": ["Sublime Text", "WebStrom"]
      }
    };
    return(
      <View style={styles.container}>
          <NavigationBar title={{title:'中古',tintColor: '#ffffff'}}
                         tintColor = '#135ece'/>
            <View style={{marginTop:0,flexDirection: 'row'}}>
              <View style={styles.leftView}>
                  <TouchableOpacity onPress={()=>this.clickSelect('left')}>
                    <View style={styles.selectStyle}>
                      <Text>爱豆
                      </Text>
                      <Image style={{height: 12,width: 15}} source={!this.state.leftClick?require('../img/ico_arr_down.png'):require('../img/ico_arr_up.png')}/>
                    </View>
                  </TouchableOpacity>
                  {
                    this.state.leftClick&&(<View style={{width: 100}}>
                    <Text style={{paddingLeft: 5,paddingTop: 10,height: 30}} onPress={()=>this.selectStyle('未开始')}>周杰伦</Text>
                    <Text style={{paddingLeft: 5,paddingTop: 10,height: 30}} onPress={()=>this.selectStyle('进行中')}>李连杰</Text>
                    <Text style={{paddingLeft: 5,paddingTop: 10,height: 30}} onPress={()=>this.selectStyle('已结束')}>凤姐</Text>
                    </View>)
                  }
              </View>
              <View style={styles.rightView}>
                  <TouchableOpacity onPress={()=>this.clickSelect('right')}>
                    <View style={styles.selectStyle}>
                      <Text>分类
                      </Text>
                      <Image style={{height: 12,width: 15}} source={!this.state.rightClick?require('../img/ico_arr_down.png'):require('../img/ico_arr_up.png')}/>
                    </View>
                  </TouchableOpacity>
                  {
                    this.state.rightClick&&(<View style={{width: 100}}>
                    <Text style={{paddingLeft: 5,paddingTop: 10,height: 30}} onPress={()=>this.selectStyle('未开始')}>王大锤</Text>
                    <Text style={{paddingLeft: 5,paddingTop: 10,height: 30}} onPress={()=>this.selectStyle('进行中')}>帅哥前</Text>
                    <Text style={{paddingLeft: 5,paddingTop: 10,height: 30}} onPress={()=>this.selectStyle('已结束')}>王尼玛</Text>
                    </View>)
                  }
              </View>
            </View>
            <ScrollView>
            {this.renderContent()}
            </ScrollView>
      </View>
    )
  }
  renderContent(){
    return(
      <View style={styles.view}>
      {
        _.map([1,2,3,4,5,6],(item,index)=>{
          return(
            <View style={styles.itemStyle}>
            <Image source={require('../img/mimeii.jpg')}
                    style={{marginLeft:0,width: DeviceWidth/2-30,height: DeviceWidth/2-30}}/>
            <Text style={{marginTop: 10}}>2016春CON应援扇
            </Text>
            </View>
          )
        })
      }
      </View>
    )
  }
  clickSelect(value){
    if (value=='left') {
      this.setState({
        leftClick: true,
        rightClick: false
      })
    }else {
      this.setState({
        leftClick: false,
        rightClick: true
      })
    }
  }
  onPress(val){
    console.log(`value=======${JSON.stringify(val)}`);
  }

}
// <MenuList data={data} nSelected={0} tabSelected={0} click={(value)=>this.onPress(value)}/>
var widths = Math.round(DeviceWidth - 10 * 3) * 0.5;

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#efefef',
  },
  leftView: {
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    width: 100,
    backgroundColor: '#ffffff',
    height: 30,
  },
  rightView: {
    marginTop: 10,
    marginLeft: 20,
    width: 100,
    backgroundColor: '#ffffff',
    height: 30,
  },
  selectStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  view: {
    width:DeviceWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemStyle: {
    marginLeft: 10,
    marginBottom: 20,
    width: widths,
    height: widths
  }
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(MiddleAges);
