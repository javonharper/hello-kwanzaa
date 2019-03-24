import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import EStyleSheet from 'react-native-extended-stylesheet';
import { color } from './style';

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('day').name
    };
  };

  handlePlayPronounciation = () => {
    const day = this.props.navigation.getParam('day');
    console.log('Playing audio for ', day.name);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TouchableOpacity onPress={this.handlePlayPronounciation}>
          <Icon name="volume-2" size={30} color={color.white} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = EStyleSheet.create({});

export default DetailsScreen;
