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

class UerProduction extends Component{

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
        title={{title:'全部出品'}}
        leftButton = {<LeftBarButton onPress={() => this.context.page.navigator.pop()}
        />}
        />
        <View>

        </View>
      </View>
    )
  }
  confirmAction(){

  }
}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(UerProduction);
