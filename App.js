import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import days from './src/days';
import { spacing, fontSize, color } from './src/style';
import DetailsScreen from './src/DetailsScreen';
import PronunciationModal from './src/PronunciationModal';

EStyleSheet.build({});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Hello Kwanzaa'
  };

  render() {
    return (
      <View>
        <FlatList
          data={days}
          ListHeaderComponent={
            <View style={styles.homeScreenHeader}>
              <Text style={styles.screenTitle}>Nguzo Saba</Text>
              <Text style={styles.screenSubTitle}>7 principles for 7 days</Text>
            </View>
          }
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.push('Details', { day: item })
              }
            >
              <PrincipleListItem {...item} />
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <View style={styles.homeFooter}>
              <Text style={styles.homeFooterText}>
                A project by <Text style={styles.footerLink}>Javon Harper</Text>
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

const Tag = ({ children }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{children}</Text>
  </View>
);

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

    // box-shadow
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
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
  // Tag
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
  },
  // Footer
  homeFooter: {
    marginBottom: spacing.larger
  },
  homeFooterText: {
    textAlign: 'center',
    color: color.grayDarker
  },
  footerLink: {
    fontWeight: '800',
    color: color.grayDarkest
  }
});

const MainStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

const RootStack = createStackNavigator(
  {
    Main: { screen: MainStack },
    PronunciationModal: { screen: PronunciationModal }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const AppNavigator = createAppContainer(RootStack);

const App = () => (
  <View style={{ flex: 1 }}>
    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    <AppNavigator />
  </View>
);

export default App;
