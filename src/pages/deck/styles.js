import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.lighter,
    justifyContent: 'center',
    padding: metrics.basePadding,
  },
  deckCardCount: {
    color: colors.regular,
    fontSize: 16,
    marginBottom: metrics.basePadding,
    textAlign: 'center',
  },
  deckTitle: {
    color: colors.dark,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    marginBottom: metrics.basePadding,
    backgroundColor: colors.primary,
    borderColor: colors.whiteTransparent,
    borderRadius: 10,
    borderWidth: 1,
    padding: metrics.basePadding,
    width: 200,
  },
  buttonTitle: {
    color: colors.white,
    fontWeight: 'bold',
  },
  addCardButton: {
    backgroundColor: colors.primary,
  },
  startQuizButton: {
    backgroundColor: colors.secundary,
  },
  deleteButton: {
    backgroundColor: colors.danger,
  },
});

export default styles;
