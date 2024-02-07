import React, { useState, useRef } from 'react';
import { FlatList, View, Text, ActivityIndicator, RefreshControl } from "react-native";
import Screen from "../../../components/screen/Screen";
import STYLES from '../styles/Styles';
import useStockListController from "../controller/StockList.controller";
import StockListItems, { RowItem } from "../../../components/flatlist-items/StockListIItems";
import BottomSheet from '../../../components/bottom-sheet/BottomSheet';
import Contents from './BottomContainerContents';

const StockListScreen = () => {
  const panelRef = useRef(null);
  const [showContents, setShowContents] = useState(false);
  const { isLoading, error, stocksData, onRefresh } = useStockListController();

  const onOpen = () => {
    setShowContents(true);
  }

  const onClose = () => {
    setShowContents(false);
  }

  return (
    <Screen>
      <View style={STYLES.container}>
        <View style={STYLES.header}>
          <Text style={STYLES.title}>Upstox Holding</Text>
        </View>
        {!isLoading && stocksData && stocksData.userHolding.length ? (
          <FlatList
            data={stocksData.userHolding}
            renderItem={({ item }) => <StockListItems item={item} />}
            keyExtractor={item => item.symbol}
            contentContainerStyle={STYLES.contentContStyles}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
            }
          />
        ) : isLoading && stocksData && !stocksData.userHolding.length ? (
          <ActivityIndicator size={'large'} color={'teal'} style={STYLES.indicatorStyles} />
        ) : !isLoading && !stocksData?.userHolding.length && error ? (
          <Text>No Data Found!</Text>
        ) : null}

        {!isLoading && stocksData?.userHolding.length ? (
          <View style={{ position: 'relative' }}>
            <BottomSheet
              ref={panelRef}
              isOpen={showContents}
              wrapperStyle={{
                height: 250,
                marginBottom: -30,
                backgroundColor: '#fff'
              }}
              sliderMinHeight={100}
              sliderMaxHeight={250}
              onOpen={onOpen}
              onClose={onClose}

            >
              <View>
                {showContents ? (
                  <Contents
                    currentValue={stocksData?.totalCurrentValue}
                    totalInvestment={stocksData.totalCurrentValue}
                    todaysProfitNLoss={stocksData.todaysPNL}
                    todaysPNL={stocksData.todaysPNL}
                  />
                ) : (
                  <View style={{ position: 'absolute', bottom: 0 }}>
                    <RowItem title="Profit & Loss:" amount={stocksData.todaysPNL} />
                  </View>
                )}
              </View>
            </BottomSheet>
          </View>
        ) : null}
      </View>
    </Screen >
  );
}

export default StockListScreen;