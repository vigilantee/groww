import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000'
  },
  rowContainer: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#00ff00',
    height: 150
  },
  columnContainer: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#ffffff',
    flex: 1
  }
});

export default styles;
