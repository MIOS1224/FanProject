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
      // leftClick: false,
      middleClick: false,
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
            <ScrollView>
            {this.renderContent()}
            </ScrollView>
            <View style={styles.menuStyle}>
              <View style={styles.middleView}>
                  <TouchableOpacity onPress={()=>this.clickSelect('middle')}>
                    <View style={styles.selectStyle}>
                      <Text>爱豆
                      </Text>
                      <Image style={{height: 12,width: 15}} source={!this.state.middleClick?require('../img/ico_arr_down.png'):require('../img/ico_arr_up.png')}/>
                    </View>
                  </TouchableOpacity>
                  {
                    this.state.middleClick&&(<View style={{width: DeviceWidth/3,alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{paddingTop: 10,height: 30,width: DeviceWidth/3,textAlign: 'center'}} onPress={()=>this.selectStyle('未开始')}>周杰伦</Text>
                    <Text style={{paddingTop: 10,height: 30,width: DeviceWidth/3,textAlign: 'center'}} onPress={()=>this.selectStyle('进行中')}>李连杰</Text>
                    <Text style={{paddingTop: 10,height: 30,width: DeviceWidth/3,textAlign: 'center'}} onPress={()=>this.selectStyle('已结束')}>凤姐</Text>
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
                    this.state.rightClick&&(<View style={{width: DeviceWidth/3,alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{paddingTop: 10,height: 30,width: DeviceWidth/3,textAlign: 'center'}} onPress={()=>this.selectStyle('未开始')}>王大锤</Text>
                    <Text style={{paddingTop: 10,height: 30,width: DeviceWidth/3,textAlign: 'center'}} onPress={()=>this.selectStyle('进行中')}>帅哥前</Text>
                    <Text style={{paddingTop: 10,height: 30,width: DeviceWidth/3,textAlign: 'center'}} onPress={()=>this.selectStyle('已结束')}>王尼玛</Text>
                    </View>)
                  }
              </View>
            </View>
      </View>
    )
  }
  renderContent(){
    return(
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
    )
  }
  // <MenuList style={styles.leftView} leftClick={this.state.leftClick} data={data} nSelected={0} tabSelected={0} click={(value)=>this.onPress(value)}/>

  shopPress(){
    this.context.page.navigator.push({
      id: 'shopDetails'
    })
  }
  clickSelect(value){
    if (value=='left') {

    }
    else if (value=='middle') {
      if (this.state.middleClick) {
        this.setState({
          middleClick: false,
        })
      }else {
        this.setState({
          middleClick: true,
          rightClick: false
        })
      }

    }else {
      if (this.state.rightClick) {
        this.setState({
          rightClick: false
        })
      }else {
        this.setState({
          middleClick: false,
          rightClick: true
        })
      }

    }
  }
  selectStyle(){

  }
  onPress(val){
    console.log(`value=======${JSON.stringify(val)}`);
  }

}
var widths = DeviceWidth/2-30;

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#efefef',
  },
  menuStyle: {
    position: 'absolute',
    top:64,
    flexDirection: 'row'
  },
  leftView: {
    alignItems: 'center',
    marginTop: 0,
    width: DeviceWidth/3,
    backgroundColor: 'pink',
    height: 30,
  },
  middleView: {
    alignItems: 'center',
    marginTop: 0,
    width: DeviceWidth/3,
    backgroundColor: '#ffffff',
    height: 30,
  },
  rightView: {
    marginTop: 0,
    width: DeviceWidth/3,
    backgroundColor: '#ffffff',
    height: 30,
  },
  selectStyle: {
    marginLeft: 0,
    height: 30,
    width: DeviceWidth/3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  view: {
    marginTop: 40,
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
)(MiddleAges);
