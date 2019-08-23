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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getImagesFromProfile } from '../../actions/searchImage';
import styles from './styles';


class ImageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      longPressedIndex: 1,
    };
    const { page } = this.state;
    const { getProfileImages, navigation } = this.props;
    const { state } = navigation;
    const { params } = state;
    const { username } = params;
    getProfileImages(username, page);
  }

  onEndReached = () => {
    const { page } = this.state;
    const { getProfileImages, navigation } = this.props;
    const { state } = navigation;
    const { params } = state;
    const { username } = params;
    this.setState({
      page: page + 1
    }, () => {
      getProfileImages(username, page);
    });
  };

  longPress = (i) => {
    this.setState({
      longPressedIndex: i
    });
    console.log('long pressed', i);
  }

  handlePress = (i) => {
    console.log('pressed', i);
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
        {searchImage[0] && (
        <View style={styles.header}>
          <Text style={styles.headerText}>{searchImage[0].user.name}</Text>
        </View>
        )}
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
  searchImage: state.searchImage.profileSearchResult
});

const matchDispatchToProps = (dispatch) => bindActionCreators({
  getProfileImages: getImagesFromProfile
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(ImageDetails);
