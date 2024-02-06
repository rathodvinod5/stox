import { FlatList, View, Text, ActivityIndicator, RefreshControl } from "react-native";
import Screen from "../../../components/screen/Screen";
import STYLES from '../styles/Styles';
import useStockListController from "../controller/StockList.controller";
import StockListItems from "../../../components/flatlist-items/StockListIItems";

const StockListScreen = () => {
  const { isLoading, error, stocksList, onRefresh } = useStockListController();

  return (
    <Screen>
      <View style={STYLES.container}>
        <View style={STYLES.header}>
          <Text style={STYLES.title}>Upstox Holding</Text>
        </View>
        {!isLoading && stocksList.length ? (
          <FlatList
            data={stocksList}
            renderItem={({ item }) => <StockListItems item={item} />}
            keyExtractor={item => item.symbol}
            contentContainerStyle={STYLES.contentContStyles}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
            }
          />
        ) : isLoading && !stocksList.length ? (
          <ActivityIndicator size={'large'} color={'teal'} style={STYLES.indicatorStyles} />
        ) : !isLoading && !stocksList.length && error ? (
          <Text>No Data Found!</Text>
        ) : null}

      </View>
    </Screen >
  );
}

export default StockListScreen;