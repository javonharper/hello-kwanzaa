import React, { Component } from 'react';
import { Linking, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EStyleSheet from 'react-native-extended-stylesheet';

import { spacing, fontSize, color } from './style';
import faqQuestions from './faq';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Frequenly Asked Questions'
  };

  render() {
    return (
      <View>
        {faqQuestions.map(({ question, answer }, i) => (
          <FAQItem key={i} question={question} answer={answer} />
        ))}
      </View>
    );
  }
}

function FAQItem({ question, answer }) {
  return (
    <View>
      <Text>{question}</Text>
      <Text>{answer}</Text>
    </View>
  );
}

const styles = EStyleSheet.create({});

export default HomeScreen;
