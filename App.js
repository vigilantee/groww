import React from 'react';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';
import ImageCard from './app/components/ImageCard/ImageCard';
import ImageDetails from './app/components/ImageDetails/ImageDetails';

const MainNavigator = createStackNavigator({
  Home: { screen: ImageCard },
  Profile: {
    screen: ImageDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    })
  },
}, {
  headerMode: 'none',
});

const App = createAppContainer(MainNavigator);

export default App;
