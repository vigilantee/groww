import React, { Component } from 'react';
import {
  FlatList,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getImagesFromProfile } from '../../actions/searchImage';
import styles from './styles';


class ImageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    const { page } = this.state;
    const { getProfileImages, username } = this.props;
    getProfileImages(username, page);
  }

  onEndReached = () => {
    const { page } = this.state;
    const { getProfileImages, username } = this.props;
    this.setState({
      page: page + 1
    }, () => {
      getProfileImages(username, page);
    });
  };

  renderImage = (item, index) => {
    const { searchImage } = this.props;
    return (
      <View
        style={styles.col}
      >
        <Image
          style={styles.image}
          source={{ uri: searchImage[index].urls.small }}
        />
      </View>
    );
  }

  render() {
    const { searchImage, navigate } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={navigate}><Text>Back</Text></TouchableOpacity>
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
