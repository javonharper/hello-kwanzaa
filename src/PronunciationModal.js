import React, { Component } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo';
import Icon from 'react-native-vector-icons/Feather';
import EStyleSheet from 'react-native-extended-stylesheet';

import { spacing, fontSize, color } from './style';

class PronunciationModal extends Component {
  async componentDidMount() {
    Audio.setIsEnabledAsync(true);
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: true
    });

    const day = this.props.navigation.getParam('day');
    this.soundObject = new Audio.Sound();
    await this.soundObject.loadAsync(day.pronunciation);
    this.playAudio();
  }

  playAudio = async () => {
    try {
      await this.soundObject.stopAsync();
      await this.soundObject.playAsync();
    } catch (error) {
      console.error('Had trouble playing audio', error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          }}
        >
          <View>
            <Text style={styles.themeText}>
              {this.props.navigation.getParam('day').theme}
            </Text>
          </View>
          <View>
            <Text style={styles.dayText}>
              {this.props.navigation.getParam('day').name}
            </Text>
          </View>
          <View>
            <Text style={styles.phoneticText}>
              {this.props.navigation.getParam('day').phonetic}
            </Text>
          </View>
          <TouchableOpacity onPress={this.playAudio}>
            <Icon name="play" size={30} color={color.black} />
          </TouchableOpacity>
        </View>
        <View style={{ justifySelf: 'flex-end' }}>
          <TouchableOpacity
            style={styles.closeButtonContainer}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.larger
  },
  themeText: {
    color: color.gray,
    fontSize: fontSize.base,
    fontWeight: '600',
    marginBottom: spacing.largest
  },
  dayText: {
    fontSize: fontSize.largest,
    fontWeight: '700',
    color: color.black,
    marginBottom: spacing.larger
  },
  phoneticText: {
    fontSize: fontSize.large,
    fontWeight: '500',
    color: color.grayDarkest,
    marginBottom: spacing.larger
  },
  closeButtonContainer: {
    backgroundColor: color.grayDarkest,
    color: color.white,
    padding: spacing.base,
    paddingLeft: spacing.larger,
    paddingRight: spacing.larger,

    borderRadius: 10
  },
  closeButtonText: {
    color: color.white,
    fontSize: fontSize.large,
    fontWeight: '700'
  }
});

export default PronunciationModal;