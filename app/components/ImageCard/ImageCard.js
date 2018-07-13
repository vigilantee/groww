import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

export default class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
        arrayOfCards: [0,1, 2, 3]
    }
  }
  render() {
    return this.props.data.map(item => {
      console.log(item.url)
    })
  }
}
