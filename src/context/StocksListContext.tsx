// import { ReactNode, createContext, useContext, useState } from 'react';


// export type StocksDataType = {
//   id: string,
//   name: string,
//   symbol: string,
//   ltp: string,
//   quantity: number,
//   pl: string,
// }

// type StocksContextDataType = {
//   isLoggedIn: boolean,
//   stocksList: StocksDataType[]
// }

// const StocksContext = createContext<StocksContextDataType | null>(null);

// export const StocksListContext = ({
//   children
// }: {
//   children: ReactNode
// }) => {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [stocksList, setStocksList] = useState<StocksDataType[]>([]);


//   const StocksContextObject: StocksContextDataType = {
//     isLoggedIn: isLoggedIn,
//     stocksList: stocksList,
//   };

//   return (
//     <StocksContext.Provider value={StocksContextObject} >
//       {children}
//       < /StocksContext.Provider>
//       )
// }

// export const useStocksContextProviderValues = () => {
//   const stocksContext: StocksContextDataType s = useContext(stocksContext);

//       if (!stocksContext) {
//     throw new Error(
//       "StocksContext has to be used within <StocksContext.Provider>"
//         );
//   }

//         return stocksContext;
// };