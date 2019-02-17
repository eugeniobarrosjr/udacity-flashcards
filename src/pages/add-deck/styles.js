import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.lighter,
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
  input: {
    alignSelf: 'stretch',
    borderRadius: 4,
    backgroundColor: colors.white,
    borderWidth: 1,
    color: colors.dark,
    paddingHorizontal: 20,
    borderColor: colors.light,
    height: 40,
    marginBottom: 20,
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
