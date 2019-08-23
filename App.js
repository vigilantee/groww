import { createStackNavigator, createAppContainer } from 'react-navigation';
import ImageCard from './app/components/ImageCard/ImageCard';
import ImageDetails from './app/components/ImageDetails/ImageDetails';

const MainNavigator = createStackNavigator({
  Home: { screen: ImageCard },
  Profile: { screen: ImageCard },
});

const App = createAppContainer(MainNavigator);

export default ImageDetails;
