import { useEffect, useState } from "react";
import { StocksContextDataType, StocksDataResponseType, StocksDataType } from "../types/StocksListTypes";
import { fetchData } from "../../../network/FetchCallApi";


const useStockListController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [stocksData, setStocksList] = useState<StocksDataResponseType | null>(null);

  useEffect(() => {
    console.log('in useEffect');
    if (!isLoading && !stocksData) {
      getData();
    }
  }, [isLoading, stocksData]); //

  const getData = async () => {
    console.log('in getData');
    setIsLoading(true);
    const data: StocksDataResponseType = await fetchData();
    let newData: StocksDataResponseType = { userHolding: [] };

    if (data && data.userHolding) {
      let totalClose = 0;
      let totalLTP = 0;
      let totalQuantity = 0;
      let totalCurrentValue = 0;
      let totalInvestmentValue = 0;
      let totalPNL = 0;
      let todaysPNL = 0;

      for (const item of data.userHolding) {
        const currVal = Number(item.ltp) * Number(item.quantity);
        const investVal = Number(item.avgPrice) * Number(item.quantity);

        totalClose += Number(item.close);
        totalLTP += Number(item.ltp);
        totalQuantity += Number(item.quantity);

        totalCurrentValue += currVal;
        totalInvestmentValue += investVal;

        newData.userHolding.push({
          ...item,
          pnl: currVal - investVal,
        });
      }

      totalPNL = totalCurrentValue - totalInvestmentValue;
      todaysPNL = (totalClose - totalLTP) * totalQuantity;

      newData.totalCurrentValue = totalCurrentValue;
      newData.totalInvestment = totalInvestmentValue;
      newData.totalPNL = totalPNL;
      newData.todaysPNL = totalPNL;

      if (error) setError(false);
      setStocksList(newData);
    }
    setIsLoading(false);
  }

  return {
    isLoading: isLoading,
    error: error,
    stocksData: stocksData,
    onRefresh: getData,
  }
}

export default useStockListController;