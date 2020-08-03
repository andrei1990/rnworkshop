import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import ToDoDetailReducer from '../todo/ToDoDetailsReducer';
import AppReducer from '../todolist/ToDoListReducer'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import AppState from '../common/AppState';
import createSagaMiddleware from 'redux-saga'
import dataSaga from '../common/SagaFactory';



const rootReducer = combineReducers<AppState>({todoList: AppReducer.reducer, detail: ToDoDetailReducer.reducer})

const persistConfig = {
       key: 'root',
       storage: AsyncStorage,
       stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
      };
      
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware()


function configureStore() {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}

const store = configureStore()


const persistor = persistStore(store);

 export {
       store,
       persistor,
 };