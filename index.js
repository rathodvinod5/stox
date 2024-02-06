/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import StockListScreen from './src/screens/stocks-list/ui/StockList';

AppRegistry.registerComponent(appName, () => StockListScreen);
