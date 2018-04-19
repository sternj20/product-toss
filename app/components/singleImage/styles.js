import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
  },
  button: {
    backgroundColor: '#88cc88',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3,
    alignItems: 'center',
    justifyContent:'center',
  },
  user:{
    flexDirection: 'row'
  },
  userHeader:{
    fontSize:30
  },
headerWrapper: {
    flex: 1,
  },
  headerText: {
    fontSize:40,
    fontWeight:'bold',
    color: 'white',
    textAlign: 'center', // ok
    alignSelf: 'center', // ok
  }
});
