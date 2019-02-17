import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lighter,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  containerTitle: {
    color: colors.dark,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  deckCardCount: {
    color: colors.regular,
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  deckTitle: {
    color: colors.dark,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderColor: colors.light,
    borderRadius: 4,
    borderWidth: 1,
    color: colors.dark,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.whiteTransparent,
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    width: 200,
  },
  submitButtonCancel: {
    backgroundColor: colors.regular,
  },
  submitButtonTitle: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
