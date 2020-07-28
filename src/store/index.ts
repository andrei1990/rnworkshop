import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import ToDoDetailReducer from '../reducers/ToDoDetailsReducer';
import ToDosReducesNew from '../reducers/ToDosReducesNew'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';


const rootReducer = combineReducers({appData: ToDosReducesNew.reducer, detail: ToDoDetailReducer.reducer})

const persistConfig = {
       key: 'root',
       storage: AsyncStorage,
       stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
      };
      
const persistedReducer = persistReducer(persistConfig, rootReducer);
      


const store = createStore(
       persistedReducer,
       applyMiddleware(
         thunk),
       );

const persistor = persistStore(store);

 export {
       store,
       persistor,
 };