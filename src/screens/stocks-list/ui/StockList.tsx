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
  const { isLoading, error, stocksList, onRefresh } = useStockListController();

  const onOpen = () => {
    console.log('onOpen: ');
    setShowContents(true);
  }

  const onClose = () => {
    console.log('onClose: ');
    setShowContents(false);
  }

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

        {/* <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={{
            flex: 1,
            alignItems: 'center',
          }}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet> */}

        {!isLoading && stocksList.length ? (
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
                {showContents ? <Contents /> : (
                  <View style={{ position: 'absolute', bottom: 0 }}>
                    <RowItem title="Profit & Loss:" amount={7000} />
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