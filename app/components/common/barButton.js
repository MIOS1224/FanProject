import React, {Component} from 'react';
import {StyleSheet,Image,TouchableOpacity} from 'react-native';

export default class BarButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.props.image}
      </TouchableOpacity>
    );
  }
}
