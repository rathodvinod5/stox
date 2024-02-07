import { View } from "react-native";
import { RowItem } from "../../../components/flatlist-items/StockListIItems";

const Contents = ({
  currentValue,
  totalInvestment,
  todaysProfitNLoss,
  todaysPNL
}: {
  currentValue?: number | string,
  totalInvestment?: number | string,
  todaysProfitNLoss?: number | string,
  todaysPNL?: number | string
}) => {
  return (
    <View style={{ height: '100%', display: 'flex', justifyContent: 'flex-end', paddingBottom: 50 }}>
      <RowItem title="Current Value:" amount={currentValue} />
      <RowItem title="Total investment:" amount={totalInvestment} />
      <RowItem title="Todays Profit & Loss:" amount={todaysProfitNLoss} />

      <View style={{ marginTop: 55 }}>
        <RowItem title="Profit & Loss:" amount={todaysPNL} />
      </View>
    </View>
  );
}

export default Contents;