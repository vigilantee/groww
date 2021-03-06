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
  likes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  header: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  details: {
    width: 116,
    height: 140,
    backgroundColor: 'white',
    opacity: 0.7,
    display: 'flex',
    justifyContent: 'center',
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
  },
  heartIcon: {
    color: '#000000',
    fontWeight: 'bold'
  }
});

export default styles;
