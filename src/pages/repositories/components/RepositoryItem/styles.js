import { StyleSheet } from 'react-native';
import { general, metrics, colors } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
  },
  repoTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.black,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },
  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
  },
  infoIcon: {
    color: colors.primary,
  },
  infoText: {
    color: colors.primary,
    fontSize: 14,
    marginLeft: metrics.baseMargin / 2,
  },
});

export default styles;