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
import LeftBarButton from '../common/leftBarButton'
import {Device} from '../components.js'
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

    return(
      <View style={styles.container}>
      <NavigationBar
        title={{title:'2016春CON应援扇'}}
        leftButton = {<LeftBarButton onPress={() => this.context.page.navigator.pop()}
        />}
        />
        <Image style={{width: DeviceWidth,height: 200,marginTop: 0}} source={require('../img/mimeii.jpg')}/>
        <Text style={{opacity: 0.5}}> 6467 views  16-06-15   13:27
        </Text>
        <Text style={{marginTop: 20}}> 2016春CON应援扇
        </Text>
        <Text style={{}}> 80元
        </Text>
        <View style={styles.contactStyle}>
        </View>
      </View>
    )
  }

}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#efefef'
  },
  contactStyle: {

  }
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(ShopDetails);
