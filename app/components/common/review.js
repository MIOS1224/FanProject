import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';
import {Device} from '../components.js'
var {DeviceWidth,DeviceHeight} = Device

export default class Segment extends Component {

  static contextTypes = {
    app: React.PropTypes.object,
    page: React.PropTypes.object
  }

  render() {
    return (
      <TouchableOpacity onPress={()=>this.onPress()}>
        <View style={styles.review}>
        <View style={styles.baseStyle}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../img/touxiang.jpeg')} style={styles.headStyle}/>
          <Text>华夫饼
          </Text>
        </View>
        <Text>2小时前
        </Text>
        </View>
          <View>
            <Text>要去看CON，买买买
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  onPress(){

  }
}

const styles = StyleSheet.create({
  review: {
    backgroundColor: "#ffffff",
    padding: 5,
    height: 50,
    width: DeviceWidth
    // justifyContent: 'space-between',
	},
  headStyle: {
    borderRadius: 10,
    width: 20,
    height: 20
  },
  baseStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    width: DeviceWidth - 60
  },

})
