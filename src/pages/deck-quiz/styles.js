import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  answerButton: {
    color: colors.danger,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: metrics.basePadding,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.whiteTransparent,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: metrics.basePadding,
    padding: metrics.basePadding,
    width: 200,
  },
  buttonsContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttonTitle: {
    color: colors.white,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.lighter,
    flex: 1,
    justifyContent: 'center',
    padding: metrics.basePadding,
  },
  correctButton: {
    backgroundColor: colors.success,
  },
  deck: {
    backgroundColor: colors.white,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    marginBottom: metrics.basePadding,
    padding: metrics.basePadding,
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
  inCorrectButton: {
    backgroundColor: colors.danger,
  },
  startQuizButton: {
    backgroundColor: colors.secundary,
    marginTop: metrics.basePadding,
  },
});

export default styles;
