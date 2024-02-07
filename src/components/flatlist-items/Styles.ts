import { StyleSheet } from "react-native";
import CONSTANTS from "../../utils/Contants";

const { WIDTH } = CONSTANTS;

const styles = StyleSheet.create({
  stackListParentItem: {
    width: WIDTH * 0.8,
    backgroundColor: 'white',
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 1.2,
    },
    borderRadius: 20,
    height: 80,
    paddingHorizontal: 20,
    // paddingVertical: 12,
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  stockListItems: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  symbolText: {
    fontSize: 16,
    fontWeight: '600'
  },
  currencyText: { fontWeight: '600' },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;