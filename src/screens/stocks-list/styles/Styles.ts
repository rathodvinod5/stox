import { StyleSheet } from "react-native";
import CONSTANTS from '../../../utils/Contants';

const { WIDTH } = CONSTANTS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    // paddingLeft: WIDTH * 0.1
  },
  contentContStyles: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 20
  },
  indicatorStyles: {
    marginTop: WIDTH * 0.4
  },
  header: {
    paddingVertical: 10,
    backgroundColor: 'tomato',
    paddingHorizontal: WIDTH * 0.1,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff'
  }
});

export default styles;