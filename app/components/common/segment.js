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
        <View style={styles.segment}>
          <Image source={require('../img/touxiang.jpeg')} style={styles.headStyle}/>
          <View>
            <Text style={{marginLeft: 5}}>二宫和也不让粉丝失望 曾忍腰伤坚持演出
            </Text>
            <View style={styles.downStyle}>
            <Text>6467 views  137cmt
            </Text>
            <Text>3分钟前
            </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

    );
  }
  onPress(){
    this.context.page.navigator.push({
      id: 'revearlingBoardDetail'
    })
  }
}

const styles = StyleSheet.create({
  segment: {
    backgroundColor: "#ffffff",
    padding: 5,
    height: 50,
    flexDirection: 'row',
    width: DeviceWidth
    // justifyContent: 'space-between',
	},
  headStyle: {
    width: 40,
    height: 40
  },
  downStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    opacity: 0.5,
    width: DeviceWidth - 60

  },

})
