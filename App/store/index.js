import { compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['snackbar'],
};

export default () => {
  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(persistedReducer, composeEnhancers());

  const persistor = persistStore(store);

  return { store, persistor };
};
