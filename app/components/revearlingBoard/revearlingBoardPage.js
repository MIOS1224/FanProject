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
import ScrollableTabView from 'react-native-scrollable-tab-view'
import JohnnyPage from './johnnyPage.js'
import ArtsPage from './artsPage.js'
import BackyardPage from './backyardPage.js'

class RevearlingBoard extends Component{

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
           <ScrollableTabView
             scrollWithoutAnimation={true}
             tabBarActiveTextColor='red'
             tabBarUnderlineStyle={{backgroundColor: 'red'}}
           >
             <JohnnyPage tabLabel="Johnny's" />
             <ArtsPage tabLabel="艺能界" />
             <BackyardPage tabLabel="后院" />
           </ScrollableTabView>
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
)(RevearlingBoard);
