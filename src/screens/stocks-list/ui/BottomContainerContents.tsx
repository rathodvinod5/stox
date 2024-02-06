import { View } from "react-native";
import { RowItem } from "../../../components/flatlist-items/StockListIItems";

const Contents = () => {
  return (
    <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 50 }}>
      <RowItem title="Current Value:" amount={7000} />
      <RowItem title="Total investment:" amount={7000} />
      <RowItem title="Todays Profit & Loss:" amount={7000} />

      <View style={{ marginTop: 65 }}>
        <RowItem title="Profit & Loss:" amount={7000} />
      </View>
    </View>
  );
}

export default Contents;