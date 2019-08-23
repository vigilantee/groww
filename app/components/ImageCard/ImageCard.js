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
import { Row, Column as Col } from 'react-native-responsive-grid';
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

  colInjector = (url) => (
    <Col size={30} style={styles.col}>
      <Image
        style={styles.image}
        source={{ uri: url }}
      />
    </Col>
  )

  rowInjector = (item, index) => {
    if (index % 3 === 0) {
      const { urlList } = this.props;
      return (
        <Row key={item.key} style={styles.row}>
          {this.colInjector(urlList[index])}
          {this.colInjector(urlList[index + 1])}
          {this.colInjector(urlList[index + 2])}
        </Row>
      );
    }
    return null;
  }

  render() {
    const { searchImage } = this.props;
    return (
      <View>
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
            onEndReachedThreshold={1}
            onEndReached={this.onEndReached}
            renderItem={
              ({ item, index }) => this.rowInjector(item, index)
            }
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  searchImage: state.searchImage.allSearchResults,
  urlList: state.searchImage.urlList
});

const matchDispatchToProps = (dispatch) => bindActionCreators({
  getSearchResults: getSearchResultsFromAPI
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Card);
