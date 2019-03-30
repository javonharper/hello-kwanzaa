import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { spacing, fontSize, color } from '../style';

const Tag = ({ children }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{children}</Text>
  </View>
);

const styles = EStyleSheet.create({
  tag: {
    backgroundColor: color.grayDarker,
    padding: spacing.smaller,
    marginRight: spacing.base,
    color: color.white,
    borderRadius: 6
  },
  tagText: {
    color: color.white,
    fontWeight: '700',
    fontSize: fontSize.base
  }
});

export default Tag;
