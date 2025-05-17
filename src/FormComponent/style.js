import {StyleSheet} from 'react-native';
const FormSheetStyle = StyleSheet.create({
  container: {
    padding: '2%',
    backgroundColor: 'white',
    height: '100%',
    bottom: 10,
  },
  header: {
    width: '100%',
    marginTop: '15%',
    marginBottom: '10%',
  },
  headingText: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  questionContainer: {
    flexDirection: 'row',
    width: '85%',
    padding: '2%',
  },
  question: {
    fontSize: 17,
    fontWeight: '400',
  },
  optionContainer: {
    marginTop: '1%',
    width: '85%',
    padding: '2%',
  },
});
export default FormSheetStyle;
