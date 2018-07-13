import React, {Component} from 'react';
import { View, Text } from 'react-native';
// import SearchBar from 'react-native-searchbar';
import styles from './styles';

export default class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
        arrayOfRows: [0,1, 2, 3]
    }
  }

  cardInject = () => {
    return (
      <View style={styles.columnContainer}>
      </View>
    );
  }

  rowInject = () => {
    let cards = [0,1,2];
    return (
      <View style={styles.rowContainer}>
        {cards.map(()=>
          this.cardInject()
        )}
      </View>
      );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.arrayOfRows.map( () =>
          this.rowInject()
          )}
      </View>
    )
  }
}
