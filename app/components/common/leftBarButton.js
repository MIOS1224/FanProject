import React, {Component} from 'react';
import {StyleSheet,Image,TouchableOpacity} from 'react-native';

import BarButton from './barButton'

export default class LeftBarButton extends Component {
  render() {
    return (
      <BarButton onPress={this.props.onPress} image={<Image source={this.props.isDrawer?require('../img/nave_menu.png'):require('../img/nave_back_gray.png')} style={styles.leftButton}/>}/>
    );
  }
}

const styles = StyleSheet.create({
  leftButton: {
    marginLeft: 10,
    marginTop: 15,
    width: 20,
    height: 20,
  },
})
