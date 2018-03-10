import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop:20,
    marginBottom: 200
  },
  primary: {
    color: 'rgb(116, 70, 195)'
  },
  title: {
    fontSize: 24,
    margin: 20
  },
  votingBar: {
    top: '-50%'
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
});
