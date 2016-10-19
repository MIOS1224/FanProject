'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  ListView
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions'
import NavigationBar from 'react-native-navbar'
import _ from 'underscore'

class MiddleAges extends Component{

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
          <NavigationBar title={{title:'善恩教育项目管理',tintColor: '#ffffff'}}
                         tintColor = '#135ece'/>

      </View>
    )
  }

}

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'pink'
  },
})

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)

  })
)(MiddleAges);
