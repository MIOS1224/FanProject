import React, {Component} from 'react';

import {
  PixelRatio,
  Platform
} from 'react-native';


import Dimensions from 'Dimensions';
const window = Dimensions.get('window');


var NavBarHeight = 44;
var StatusBarHeight = 20;
var TabBarHeight = 49;

if (Platform.OS == 'ios') {

}

if (Platform.OS == 'android') {
  TabBarHeight = 0;
  NavBarHeight = 56;
}


var ContentTop = StatusBarHeight + NavBarHeight

if (Platform.OS == 'android') {
  ContentTop = 44
}


var KeyboardHeight = 216; // 162 for landscape

var isSlowDevice = false;

var vMajor, vMinor;

module.exports = {
  DeviceWidth: window.width,
  DeviceHeight: window.height,
  StatusBarHeight: StatusBarHeight,
  NavBarHeight: NavBarHeight,
  TabBarHeight: TabBarHeight,
  ContentHeight: window.height - StatusBarHeight - NavBarHeight,
  ContentTop: ContentTop,
  OnePixel: 1 / PixelRatio.get(),
  KeyboardHeight: KeyboardHeight,
  isSlowDevice: isSlowDevice,
};
