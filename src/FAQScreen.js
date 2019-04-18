import React, { Component } from 'react';
import {
  Linking,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EStyleSheet from 'react-native-extended-stylesheet';

import { spacing, fontSize, color } from './style';
import faqQuestions from './faq';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'About Kwanzaa'
  };

  render() {
    return (
      <ScrollView>
        {faqQuestions.map(({ question, answer }, i) => (
          <FAQItem key={i} question={question} answer={answer} />
        ))}
      </ScrollView>
    );
  }
}

function FAQItem({ question, answer }) {
  return (
    <View style={styles.faqItemWrapper}>
      <Text style={styles.faqItemQuestion}>{question}</Text>
      <Text style={styles.faqItemAnswer}>{answer}</Text>
    </View>
  );
}

const faqItemStyles = {
  faqItemWrapper: {
    padding: spacing.base,
    backgroundColor: color.grayLightest,
    borderBottomWidth: 1,
    borderBottomColor: color.grayDark
  },
  faqItemQuestion: {
    fontSize: fontSize.base,
    fontWeight: '700',
    color: color.black,
    marginBottom: spacing.base
  },
  faqItemAnswer: {
    fontSize: fontSize.base,
    color: color.black
  }
};

const styles = EStyleSheet.create({
  ...faqItemStyles
});

export default HomeScreen;
