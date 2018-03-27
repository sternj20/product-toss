import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    marginTop:20,
    marginBottom: 80
  },
  primary: {
    color: 'rgb(116, 70, 195)'
  },
  header: {
    fontSize: 30,
    color: 'blue'

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
