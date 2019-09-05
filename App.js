import React, { Component } from 'react';
// import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';
import ImageCard from './app/components/ImageCard/ImageCard';
import ImageDetails from './app/components/ImageDetails/ImageDetails';

// const MainNavigator = createStackNavigator({
//   Home: { screen: ImageCard },
//   Profile: {
//     screen: ImageDetails,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Profile',
//       headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
//     })
//   },
// }, {
//   headerMode: 'none',
// });

// const App = createAppContainer(MainNavigator);

class App extends Component {
  // const [page, setPage] = useState('imagecard');
  // return (page === 'imagecard') ? (<ImageCard navigate={() => setPage('imagedetails')} />) : (<ImageDetails navigate={() => setPage('imagecard')} />);
  constructor(props) {
    super(props);
    this.state = {
      page: 'imagecard',
      username: 'blakewisz'
    };
  }

  setPage = (page, username = 'blakewisz') => {
    this.setState({
      page,
      username
    });
  }

  render() {
    const { page, username } = this.state;
    const { setPage } = this;
    return (
      (page === 'imagecard') ? <ImageCard navigate={(user) => setPage('Profile', user)} /> : <ImageDetails navigate={() => setPage('imagecard')} username={username} />
    );
  }
}

export default App;
