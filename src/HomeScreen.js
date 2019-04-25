import React, { Component } from 'react';
import { Linking, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EStyleSheet from 'react-native-extended-stylesheet';

import { spacing, fontSize, color } from './style';
import DAYS from './days';
import Tag from './components/Tag';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Hello Kwanzaa'
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <FlatList
          data={DAYS}
          ListHeaderComponent={
            <View style={styles.homeScreenHeader}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Text style={styles.screenTitle}>Nguzo Saba</Text>
                <TouchableOpacity onPress={() => navigation.push('FAQ')}>
                  <Icon name="info" size={30} color={color.grayDarker} />
                </TouchableOpacity>
              </View>
              <Text style={styles.screenSubTitle}>7 principles for 7 days</Text>
            </View>
          }
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.push('Details', { day: item })}
            >
              <PrincipleListItem {...item} />
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <View style={styles.homeFooter}>
              <Text style={styles.homeFooterText}>A project by</Text>
              <Text
                style={styles.footerLink}
                onPress={() => Linking.openURL('https://www.javonharper.com')}
              >
                Javon Harper
              </Text>
              <Text style={styles.homeFooterText}>and</Text>
              <Text
                style={styles.footerLink}
                onPress={() =>
                  Linking.openURL('https://www.tiffanyrobinson.me')
                }
              >
                Tiffany Robinson
              </Text>
            </View>
          }
        />
      </View>
    );
  }
}

const PrincipleListItem = ({ name, theme, day, date }) => (
  <View style={styles.principleListItem}>
    <View>
      <View style={styles.principleHeader}>
        <Tag>{`Day ${day}`}</Tag>
        <Tag>{date}</Tag>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <View>
          <Text style={styles.principleName}>{name}</Text>
          <Text style={styles.principleTheme}>{theme}</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Icon name="chevron-right" size={30} color={color.grayDark} />
        </View>
      </View>
    </View>
  </View>
);

const footerStyles = {
  homeFooter: {
    marginBottom: spacing.larger
  },
  homeFooterText: {
    color: color.grayDarker,
    marginBottom: spacing.smaller,
    textAlign: 'center'
  },
  footerLink: {
    color: color.grayDarkest,
    fontSize: fontSize.large,
    fontWeight: '800',
    marginBottom: spacing.smaller,
    textAlign: 'center'
  }
};

const boxShadow = {
  shadowColor: color.black,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5
};

const styles = EStyleSheet.create({
  // Header
  homeScreenHeader: {
    padding: spacing.base
  },
  screenTitle: {
    fontSize: fontSize.largest,
    color: color.black,
    fontWeight: '700',
    marginBottom: spacing.smallest
  },
  screenSubTitle: {
    fontSize: fontSize.larger,
    color: color.grayDarker,
    fontWeight: '400',
    marginBottom: spacing.smaller
  },
  // PrincipleListItem
  principleListItem: {
    backgroundColor: color.black,
    padding: spacing.base,
    marginBottom: spacing.larger,
    borderRadius: 4,
    marginLeft: spacing.base,
    marginRight: spacing.base,
    ...boxShadow
  },
  principleHeader: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: spacing.base
  },
  principleName: {
    fontSize: fontSize.largest,
    color: color.white,
    fontWeight: '700',
    marginBottom: spacing.smaller
  },
  principleTheme: {
    fontSize: fontSize.large,
    color: color.grayLighter
  },
  ...footerStyles
});

export default HomeScreen;
