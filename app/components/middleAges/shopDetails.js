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
import ActionSheet from 'react-native-actionsheet';

var {DeviceWidth,DeviceHeight} = Device

class ShopDetails extends Component{

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
      title: '编辑',
      tintColor: 'red',
      handler: () => {
        this.ActionSheet.show();

      }
    }
    const buttons = ['取消', '编辑', '删除', '分享'];
    return(
      <View style={styles.container}>
      <NavigationBar
        title={{title:'2016春CON应援扇'}}
        leftButton = {<LeftBarButton onPress={() => this.context.page.navigator.pop()}
        />}
        rightButton={rightButtonConfig}
        />
        <Image style={{width: DeviceWidth,height: 200,marginTop: 0}} source={require('../img/mimeii.jpg')}/>
        <Text style={{opacity: 0.6,marginLeft: 10}}> 6467 views  16-06-15   13:27
        </Text>
        <Text style={{marginTop: 20,marginLeft: 10}}> 2016春CON应援扇
        </Text>
        <Text style={{marginLeft: 10}}> 80元
        </Text>
        <TouchableOpacity onPress={()=>this.contactAction()}>
          <View style={styles.contactStyle}>
          <Text style={{color: '#ffffff'}}>联系商家
          </Text>
          </View>
        </TouchableOpacity>
        <Text style={{marginHorizontal: 10}}>出16年春CON应援扇2个，品相良好。求出出16年春CON应援扇2个，品相良好，谁用谁知道，用过的都说好
        </Text>
        <View style={{backgroundColor:'#efefef',height: 40,justifyContent: 'center'}}>
          <Text style={{marginLeft: 10}}>卖家介绍
          </Text>
        </View>
        <View>
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Image source={require('../img/touxiang.jpeg')} style={{height: 50,width: 50,margin: 10,borderRadius:25}}/>
            <View style={{justifyContent: 'center'}}>
              <Text>帅哥陈钱控
              </Text>
              <Text style={{opacity: 0.6,marginTop: 5}}>妈，这辈子我就要嫁给他！
              </Text>
            </View>
            <View style={{marginLeft: 50,marginRight: 10,borderColor: 'red',borderWidth: 1}}>
              <TouchableOpacity>
                <Text style={{color: 'red'}}>关注
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={()=>this.checkAllProduction()}>
          <View>
            <Text>查看该用户全部出品
            </Text>
          </View>
        </TouchableOpacity>

        <ActionSheet
                ref={(o) => this.ActionSheet = o}
                title=""
                options={buttons}
                cancelButtonIndex={0}
                onPress={(index)=>this._handlePress(index)}
            />
      </View>
    )
  }
  _handlePress(index) {
    if (index==0) {
      console.log(`===11111====`);

    }else if (index==1) {
      console.log(`===222====`);
      this.context.page.navigator.push({
        id: 'editMiddleAge'
      })
    }else if (index==2){
      console.log(`===333====`);

    }else {
      console.log(`===444====`);

    }
  }
  checkAllProduction(){
    this.context.page.navigator.push({
      id: 'userProduction'
    })
  }
  contactAction(){

  }
}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
  contactStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 15,
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
)(ShopDetails);
