import React from 'react';
import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({});

class HomeScreen extends React.Component {
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
          renderItem={({ item }) => <PrincipleListItem {...item} />}
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

class DetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const spacing = {
  smallest: '0.25rem',
  smaller: '0.5rem',
  small: '0.75rem',
  base: '1rem',
  large: '2rem',
  larger: '2.5rem',
  largest: '3rem'
};

const fontSize = {
  smallest: '0.5rem',
  smaller: '0.75rem',
  small: '0.875rem',
  base: '1rem',
  large: '1.125rem',
  larger: '1.5rem',
  largest: '2rem'
};

const color = {
  black: '#212832',
  grayDarkest: '#424B59',
  grayDarker: '#707A89',
  grayDark: '#949FAF',
  gray: '#B1BECC',
  grayLight: '#CDD4DA',
  grayLighter: '#D6DDE4',
  grayLightest: '#E2E7EB',
  white: '#F8F9FA'
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

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

const AppNavigator = createAppContainer(MainNavigator);

const App = () => (
  <View style={{ flex: 1 }}>
    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    <AppNavigator />
  </View>
);
export default App;

const days = [
  {
    day: 1,
    name: 'Umoja',
    theme: 'Unity',
    description:
      'To strive for and to maintain unity in the family, community, nation, and race.',
    date: 'December 26th'
  },
  {
    day: 2,
    name: 'Kujichagulia',
    theme: 'Self-Determination',
    description:
      'To define and name ourselves, as well as to create and speak for ourselves.',
    date: 'December 27th'
  },
  {
    day: 3,
    name: 'Ujima',
    theme: 'Collective Work and Responsibility',
    description:
      "To build and maintain our community together and make our brothers' and sisters' problems our problems and to solve them together.",
    date: 'December 28th'
  },
  {
    day: 4,
    name: 'Ujamaa',
    theme: 'Cooperative Economics',
    description:
      'To build and maintain our own stores, shops, and other businesses and to profit from them together.',
    date: 'December 29th'
  },
  {
    day: 5,
    name: 'Nia',
    theme: 'Purpose',
    description:
      'To make our collective vocation the building and developing of our community in order to restore our people to their traditional greatness.',
    date: 'December 30th'
  },
  {
    day: 6,
    name: 'Kuumba',
    theme: 'Creativity',
    description:
      'To do always as much as we can, in the way we can, in order to leave our community more beautiful and beneficial than we inherited it.',
    date: 'December 31st'
  },
  {
    day: 7,
    name: 'Imani',
    theme: 'Faith',
    description:
      'To believe with all our hearts in our people, our parents, our teachers, our leaders, and the righteousness and victory of our struggle.',
    date: 'January 1st'
  }
];
