import { useEffect, useState } from "react";
import { StocksContextDataType, StocksDataResponseType, StocksDataType } from "../types/StocksListTypes";
import { fetchData } from "../../../network/FetchCallApi";


const useStockListController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [stocksList, setStocksList] = useState<StocksDataType[]>([]);

  useEffect(() => {
    console.log('in useEffect');
    if (!isLoading && !stocksList.length) {
      getData();
    }
  }, []); //isLoading, stocksList

  const getData = async () => {
    console.log('in getData');
    setIsLoading(true);
    const data: StocksDataResponseType = await fetchData();
    if (data && data.userHolding) {
      if (error) setError(false);
      setStocksList(data.userHolding);
    }
    setIsLoading(false);
  }

  return {
    isLoading: isLoading,
    error: error,
    stocksList: stocksList,
    onRefresh: getData,
  }
}

export default useStockListController;