import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EStyleSheet from 'react-native-extended-stylesheet';

import { color, spacing, fontSize } from './style';

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
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.headingWrapper}>
          <View style={styles.principleHeader}>
            <Tag>{`Day ${day}`}</Tag>
            <Tag>{date}</Tag>
          </View>
          <View>
            <View style={styles.principleRow}>
              <Text style={styles.principleName}>{name}</Text>
              <TouchableOpacity
                style={styles.pronounciation}
                onPress={this.handlePlayPronounciation}
              >
                <Icon name="volume-2" size={30} color={color.yellow} />
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
            Discussion questions
          </Text>
          <Text style={styles.discussionQuestionsContent}>
            {discussionQuestion}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const Tag = ({ children }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{children}</Text>
  </View>
);

const themeStyles = {
  themeWrapper: {
    backgroundColor: color.white,
    padding: spacing.large,
    paddingTop: spacing.base,
    paddingBottom: spacing.base,
    borderBottomWidth: 1,
    borderColor: color.grayLight,
    borderStyle: 'solid'
  },
  themeText: {
    color: color.black,
    fontSize: fontSize.large,
    fontWeight: '600',
    lineHeight: '1.5rem'
  }
};

const discussionQuestionsStyles = {
  discussionQuestionsWrapper: {
    backgroundColor: color.grayLightest,
    color: color.grayDarkest,
    padding: spacing.large,
    paddingTop: spacing.base,
    paddingBottom: spacing.base,
    fontWeight: '700'
  },
  discussionQuestionsHeader: {
    color: color.black,
    fontSize: fontSize.large,
    marginBottom: spacing.base,
    fontWeight: '700'
  },
  discussionQuestionsContent: {
    color: color.grayDarkest,
    fontSize: fontSize.large,
    lineHeight: '1.5rem'
  }
};

const tagStyles = {
  tag: {
    backgroundColor: color.redLight,
    padding: spacing.smaller,
    marginRight: spacing.large,
    color: color.white,
    borderRadius: 6
  },
  tagText: {
    color: color.white,
    fontWeight: '700',
    fontSize: fontSize.base
  }
};

const styles = EStyleSheet.create({
  pronounciation: { marginTop: spacing.smallest },
  headingWrapper: {
    backgroundColor: color.red,
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
    marginRight: spacing.base,
    marginBottom: spacing.smaller
  },
  principleRow: {
    flexDirection: 'row'
  },
  principleTheme: {
    fontSize: fontSize.large,
    color: color.white,
    opacity: 0.9
  },
  ...themeStyles,
  ...discussionQuestionsStyles,
  ...tagStyles
});

export default DetailsScreen;
