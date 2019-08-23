import { createStackNavigator, createAppContainer } from 'react-navigation';
import ImageCard from './app/components/ImageCard/ImageCard';
import ImageDetails from './app/components/ImageDetails/ImageDetails';

const MainNavigator = createStackNavigator({
  Home: { screen: ImageCard },
  Profile: { screen: ImageDetails },
}, {
  headerMode: 'none',
});

const App = createAppContainer(MainNavigator);

export default App;
