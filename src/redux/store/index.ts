import AsyncStorage from '@react-native-community/async-storage'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import {persistReducer, persistStore} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import createSagaMiddleware from 'redux-saga'
import AppState from '../common/AppState'
import dataSaga from '../common/SagaFactory'
import ToDoDetailReducer from '../todo/ToDoDetailsReducer'
import AppReducer from '../todolist/ToDoListReducer'
import AuthReducer from '../login/Reducer'

const rootReducer = combineReducers<AppState>({
  todoList: AppReducer.reducer,
  detail: ToDoDetailReducer.reducer,
  auth: AuthReducer.reducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

function configureStore() {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
  sagaMiddleware.run(dataSaga)
  return store
}

const store = configureStore()

const persistor = persistStore(store)

export {store, persistor}
