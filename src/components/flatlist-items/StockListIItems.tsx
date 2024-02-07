import { Text, View } from "react-native";
import { StocksDataType } from "../../screens/stocks-list/types/StocksListTypes";
import { indianCurrencyFormat } from "../../utils/CurrencyFormatter";
import STYLES from "./Styles";

const StockListItems = ({
  item
}: {
  item: StocksDataType
}) => {

  return (
    <View style={STYLES.stackListParentItem}>
      <View style={STYLES.stockListItems}>
        <Text style={STYLES.symbolText}>{item.symbol}</Text>
        <View style={STYLES.flexRow}>
          <Text>LTP: </Text>
          <Text style={STYLES.currencyText}>
            {indianCurrencyFormat(Number(item.ltp))}
          </Text>
        </View>
      </View>
      <View style={STYLES.stockListItems}>
        <Text>{item.quantity}</Text>
        <View style={STYLES.flexRow}>
          <Text>P/L: </Text>
          <Text style={STYLES.currencyText}>
            {indianCurrencyFormat(Number(item.pnl))}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default StockListItems;


export const RowItem = ({
  title,
  amount
}: {
  title: string,
  amount?: number | undefined | string
}) => {

  return (
    <View style={STYLES.stockListItems}>
      <Text style={STYLES.symbolText}>{title}</Text>
      <View style={STYLES.flexRow}>
        {amount ? <Text>{indianCurrencyFormat(Number(amount))}</Text> : ''}
      </View>
    </View>
  );
}