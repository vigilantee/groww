import React, { Component } from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from 'react-native-searchbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getSearchResultsFromAPI from '../../actions/searchImage';

import styles from './styles';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'coffee',
      page: 1
    };
    const { query, page } = this.state;
    const { getSearchResults } = this.props;
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

  renderImage = (item, index) => {
    const { searchImage } = this.props;
    return (
      <View style={styles.col}>
        <Image
          style={styles.image}
          source={{ uri: searchImage[index].urls.small }}
        />
      </View>
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
        {searchImage.length > 5 && (
          <FlatList
            data={searchImage}
            initialNumToRender={12}
            numColumns={3}
            onEndReachedThreshold={1}
            onEndReached={this.onEndReached}
            renderItem={
              ({ item, index }) => this.renderImage(item, index)
            }
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
  getSearchResults: getSearchResultsFromAPI
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Card);
