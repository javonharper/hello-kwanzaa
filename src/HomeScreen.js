import React, { Component } from 'react';
import { Linking, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EStyleSheet from 'react-native-extended-stylesheet';

import { spacing, fontSize, color } from './style';
import DAYS from './days';

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
            <View>
              <View style={{ position: 'absolute', left: 0, right: 0 }}>
                <View style={{ backgroundColor: color.red, height: 150 }} />
                <View style={{ backgroundColor: color.black, height: 30 }} />
                <View style={{ backgroundColor: color.green, height: 30 }} />
              </View>
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
                    <Icon name="info" size={30} color={color.redLightest} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.screenSubTitle}>
                  The Seven Principles of Kwanzaa
                </Text>
              </View>
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
        <Text
          style={{ color: color.red, fontWeight: '700', marginRight: 15 }}
        >{`Day ${day}`}</Text>
        <Text style={{ color: color.red, fontWeight: '700' }}>{date}</Text>
      </View>
      <View>
        <Text style={styles.principleName}>{name}</Text>
        <Text style={styles.principleTheme}>{theme}</Text>
      </View>
    </View>
    <View style={{ justifyContent: 'center' }}>
      <Icon name="chevron-right" size={30} color={color.red} />
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
  shadowColor: color.grayDark ,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.4,
  shadowRadius: 3,
  elevation: 5
};

const styles = EStyleSheet.create({
  // Header
  homeScreenHeader: {
    padding: spacing.base
  },
  screenTitle: {
    fontSize: fontSize.largest,
    color: color.white,
    fontWeight: '700',
    marginBottom: spacing.smallest
  },
  screenSubTitle: {
    fontSize: fontSize.large,
    color: color.redLightest,
    fontWeight: '400',
    marginBottom: spacing.smaller
  },
  // PrincipleListItem
  principleListItem: {
    borderLeftWidth: 5,
    borderStyle: 'solid',
    borderColor: color.red,
    backgroundColor: color.redLightest,
    padding: spacing.base,
    marginBottom: spacing.larger,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    marginLeft: spacing.base,
    marginRight: spacing.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...boxShadow
  },
  principleHeader: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: spacing.large
  },
  principleName: {
    fontSize: fontSize.largest,
    color: color.red,
    fontWeight: '700',
    marginBottom: spacing.smaller
  },
  principleTheme: {
    fontSize: fontSize.large,
    color: color.red,
    opacity: 0.8
  },
  ...footerStyles
});

export default HomeScreen;
