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
import Segment from '../common/segment.js'

class ArtsPage extends Component{

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
    backgroundColor: '#efefef'
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
)(ArtsPage);
