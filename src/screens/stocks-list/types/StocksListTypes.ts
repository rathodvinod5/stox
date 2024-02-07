export type StocksDataType = {
  "symbol": string,
  "quantity": 10,
  "ltp": string,
  "avgPrice": string,
  "close": string,
  pnl?: string | number,
  currValue?: string | number,
  investmentValue?: string | number
}

export type StocksDataResponseType = {
  userHolding: StocksDataType[],
  totalCurrentValue?: string | number,
  totalInvestment?: string | number,
  totalPNL?: string | number,
  todaysPNL?: string | number,
}

export type StocksContextDataType = {
  isLoggedIn: boolean,
  stocksList: StocksDataType[]
}