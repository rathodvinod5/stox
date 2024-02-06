export type StocksDataType = {
  "symbol": string,
  "quantity": 10,
  "ltp": string,
  "avgPrice": string,
  "close": string
}

export type StocksDataResponseType = {
  userHolding: StocksDataType[]
}

export type StocksContextDataType = {
  isLoggedIn: boolean,
  stocksList: StocksDataType[]
}