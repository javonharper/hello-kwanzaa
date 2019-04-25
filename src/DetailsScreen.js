import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EStyleSheet from 'react-native-extended-stylesheet';

import { color, spacing, fontSize } from './style';
import Tag from './components/Tag';

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('day').name
  });

  handlePlayPronounciation = () => {
    const { navigation } = this.props;
    const day = navigation.getParam('day');
    navigation.push('PronunciationModal', { day });
  };

  render() {
    const { navigation } = this.props;
    const {
      day,
      date,
      name,
      theme,
      description,
      discussionQuestion
    } = navigation.getParam('day');
    return (
      <ScrollView style={{ flex: 1, backgroundColor: color.grayLighter }}>
        <View style={styles.headingWrapper}>
          <View style={styles.principleHeader}>
            <Tag>{`Day ${day}`}</Tag>
            <Tag>{date}</Tag>
          </View>
          <View>
            <View style={styles.principleRow}>
              <Text style={styles.principleName}>{name}</Text>
              <TouchableOpacity onPress={this.handlePlayPronounciation}>
                <Icon name="volume-2" size={30} color={color.white} />
              </TouchableOpacity>
            </View>
            <Text style={styles.principleTheme}>{theme}</Text>
          </View>
        </View>
        <View style={styles.themeWrapper}>
          <Text style={styles.themeText}>{description}</Text>
        </View>
        <View style={styles.discussionQuestionsWrapper}>
          <Text style={styles.discussionQuestionsHeader}>
            DISCUSSION QUESTIONS
          </Text>
          <Text style={styles.discussionQuestionsContent}>
            {discussionQuestion}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const themeStyles = {
  themeWrapper: {
    backgroundColor: color.grayLighter,
    padding: spacing.large
  },
  themeText: {
    color: color.grayDarkest,
    fontSize: fontSize.larger
  }
};

const discussionQuestionsStyles = {
  discussionQuestionsWrapper: {
    backgroundColor: color.grayLighter,
    color: color.grayDarkest,
    padding: spacing.large,
    fontWeight: '700'
  },
  discussionQuestionsHeader: {
    color: color.grayDarkest,
    fontSize: fontSize.base,
    marginBottom: spacing.base,
    fontWeight: '700'
  },
  discussionQuestionsContent: {
    color: color.grayDarkest,
    fontSize: fontSize.large
  }
};

const styles = EStyleSheet.create({
  headingWrapper: {
    backgroundColor: color.black,
    padding: spacing.large
  },
  principleHeader: {
    flexDirection: 'row',
    marginBottom: spacing.larger
  },
  principleName: {
    fontSize: fontSize.largest,
    color: color.white,
    fontWeight: '700',
    marginRight: spacing.small,
    marginBottom: spacing.smaller
  },
  principleRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  principleTheme: {
    fontSize: fontSize.large,
    color: color.grayLighter
  },
  ...themeStyles,
  ...discussionQuestionsStyles
});

export default DetailsScreen;
