'use strict';

import React, {Component} from 'react';
import {StyleSheet,Text,View,Navigator,BackAndroid} from 'react-native';

export default class ContextWrapper extends Component{

  static childContextTypes = {
    page: React.PropTypes.object,
  }

  getChildContext() {
    return {
      page: this.props.context,

    }
  }

  componentDidMount() {

  }

  render() {
    return (this.props.children)
  }
}
