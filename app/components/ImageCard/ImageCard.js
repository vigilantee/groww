import React, { Component } from 'react';
import {
  FlatList,
  ImageBackground,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from 'react-native-searchbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSearchResultsFromAPI, getImagesFromProfile } from '../../actions/searchImage';
import styles from './styles';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'coffee',
      page: 1,
      longPressedIndex: 1
    };
    const { query, page } = this.state;
    const { getSearchResults } = this.props;
    // getProfileImages(username, page);
    getSearchResults(query, page);
  }

  onEndReached = () => {
    const { query, page } = this.state;
    const { getSearchResults } = this.props;
    this.setState({
      page: page + 1
    }, () => {
      getSearchResults(query, page);
    });
  };

  handleResults = (results) => {
    const { query, page } = this.state;
    const { getSearchResults } = this.props;

    this.setState({
      query: results,
      page: 1
    }, () => getSearchResults(query, page));
  }

  longPress = (i) => {
    this.setState({
      longPressedIndex: i
    });
  }

  handlePress = (i) => {
    const { searchImage, navigate } = this.props;
    navigate(searchImage[i].user.username);
  }

  renderImage = (item, index) => {
    const { searchImage } = this.props;
    const { longPressedIndex } = this.state;
    return (
      <TouchableOpacity
        style={styles.col}
        onLongPress={() => this.longPress(index)}
        onPress={() => this.handlePress(index)}
      >
        <ImageBackground
          style={styles.image}
          source={{ uri: searchImage[index].urls.small }}
        >
          {
            (longPressedIndex === index)
            && (
              <View style={styles.details}>
                <Text>
                  {searchImage[index].user.name}
                </Text>
                <View style={styles.likes}>
                  <Icon name="heart" size={15} style={styles.heartIcon} />
                  <Text>
                    {searchImage[index].likes}
                  </Text>
                </View>
              </View>
            )
          }
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  render() {
    const { searchImage } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <SearchBar
            // eslint-disable-next-line no-return-assign
            ref={(ref) => this.searchBar = ref}
            style={{ height: 30, width: 330 }}
            icon={{ type: 'material-community', color: '#86939e', name: 'share' }}
            focusOnLayout
            placeholder="Search..."
            handleSearch={this.handleResults}
          />
          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <Icon name="search" size={27} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {searchImage.length > 5
          && (
            <FlatList
              data={searchImage}
              initialNumToRender={12}
              numColumns={3}
              onEndReachedThreshold={1}
              onEndReached={this.onEndReached}
              renderItem={
                ({ item, index }) => this.renderImage(item, index)
              }
              extraData={this.state}
            />
          )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  searchImage: state.searchImage.allSearchResults
});

const matchDispatchToProps = (dispatch) => bindActionCreators({
  getSearchResults: getSearchResultsFromAPI,
  getProfileImages: getImagesFromProfile
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Card);
