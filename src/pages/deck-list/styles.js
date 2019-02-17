import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lighter,
    flex: 1,
    justifyContent: 'center',
    padding: metrics.basePadding,
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
  noDecksTitle: {
    color: colors.regular,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
