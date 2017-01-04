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
import ModalDropdown from 'react-native-modal-dropdown';
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

    }
  }

  componentDidMount(){

  }

  render(){

    return(
      <View style={styles.container}>
          <NavigationBar title={{title:'中古'}}
                          />
            {this.renderModalDropDown()}
            <ScrollView>
            {this.renderContent()}
            </ScrollView>

      </View>
    )
  }

  renderModalDropDown(){
    return(
      <View style={styles.selectStyle}>
          <ModalDropdown
            options={['爱豆', 'SMAP','V6','托福预备','KinKi Kids','News']}
            style={styles.toolbarStyle}
            textStyle={styles.textStyle}
            dropdownStyle={styles.dropdownStyle}
            defaultValue='爱豆'
            renderRow={(rowData, rowID, highlighted)=>this._renderDropDownRow(rowData, rowID, highlighted)}
            renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._renderDropDownSeparator(sectionID, rowID, adjacentRowHighlighted)}
            onSelect={(value)=>this._selectAction(value)}>
          </ModalDropdown>
          <ModalDropdown
            options={['全部','SHOP/生写','CD/DVD','杂/切面','应援扇','学历年','场刊/会刊','写真集','海报']}
            style={styles.toolbarStyle}
            textStyle={styles.textStyle}
            dropdownStyle={styles.dropdownStyle}
            defaultValue='分类'
            renderRow={(rowData, rowID, highlighted)=>this._renderDropDownRow(rowData, rowID, highlighted)}
            renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._renderDropDownSeparator(sectionID, rowID, adjacentRowHighlighted)}
            onSelect={(value)=>this._selectAction(value)}>
          </ModalDropdown>
          <ModalDropdown
            options={['默认','最新']}
            style={styles.toolbarStyle}
            textStyle={styles.textStyle}
            dropdownStyle={styles.dropdownStyle}
            defaultValue='排序'
            renderRow={(rowData, rowID, highlighted)=>this._renderDropDownRow(rowData, rowID, highlighted)}
            renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._renderDropDownSeparator(sectionID, rowID, adjacentRowHighlighted)}
            onSelect={(value)=>this._selectAction(value)}>
          </ModalDropdown>
      </View>
    )
  }

  _selectAction(){

  }

  _renderDropDownSeparator(sectionID, rowID, adjacentRowHighlighted){
    return(
      <View style={{height: 2,backgroundColor: '#ffffff'}} key={rowID}>
      </View>
    )
  }

  _renderDropDownRow(rowData, rowID, highlighted){
    return (
        <View style={{alignItems: 'center',justifyContent: 'center',height: 40,backgroundColor:highlighted?'#004f93':'#efefef'}}>
          <Text style={{textAlign: 'center',color: highlighted?'#ffffff':'black'}}>
            {rowData}
          </Text>
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

  shopPress(){
    this.context.page.navigator.push({
      id: 'shopDetails'
    })
  }

}
var widths = DeviceWidth/2-30;

var styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#efefef',
  },
  selectStyle: {
    flexDirection: 'row',
    width: DeviceWidth
  },
  toolbarStyle: {
    width: DeviceWidth/3,
    backgroundColor: '#004f93'
  },
  textStyle: {
    height: 40,
    lineHeight: 40,
    marginHorizontal: 6,
    // fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#ffffff'
  },
  dropdownStyle: {
    backgroundColor: '#efefef',
    width: DeviceWidth/3,
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
)(MiddleAges);
