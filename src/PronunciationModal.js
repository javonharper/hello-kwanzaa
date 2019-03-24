import React, { Component } from 'react';
import { Audio } from 'expo';
import { Button, Text, TouchableOpacity, View } from 'react-native';

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>
          {this.props.navigation.getParam('day').name}
        </Text>
        <Button onPress={this.playAudio} title="Play" />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

export default PronunciationModal;
