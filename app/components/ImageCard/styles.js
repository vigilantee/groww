import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  col: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    width: 116,
    height: 140
  },
  icon: {
    color: '#000000',
    fontWeight: 'bold',
    paddingRight: 25
  }
});

export default styles;
