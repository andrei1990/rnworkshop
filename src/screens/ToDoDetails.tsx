import React, {Component} from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native'
import {connect} from 'react-redux'
import ToDoDetailAction from '../redux/todo/ToDoDetailAction'
import ToDo from '../model/ToDo'
import {
  DetailsScreenNavigationProp,
  DetailsScreenRouteProp,
} from './HomeScreen/HomeScreen'
import ToDoDetailState from '../redux/todo/ToDoDetailsState'
import {iDataState} from '../redux/common/IState'

interface ToDoDetailProps {
  initialToDoData: ToDo;
  resetState: () => any;
  fetchDetail: (deal: ToDo) => any;
  todoDetailData: ToDoDetailState;
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

class ToDoDetail extends Component<ToDoDetailProps> {
  componentDidMount() {
    const {itemName} = this.props.route.params
    this.props.fetchDetail({name: itemName})
  }

  componentWillUnmount() {
    this.props.resetState()
  }

  handlePress: any = () => {
    console.log('pressed item')
    this.props.navigation.popToTop()
  };

  render() {
    const todo = this.props.todoDetailData.todo
    console.log(todo)
    const loading = this.props.todoDetailData.state === iDataState.loading
    console.log(loading)
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.backLink}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.container, styles.horizontal]}>
          <View>{todo && <Text style={styles.title}>{todo.name}</Text>}</View>
        </TouchableOpacity>
        <ActivityIndicator size="large" color={'#999999'} animating={loading} />
      </SafeAreaView>
    )
  }
}

function mapStateToProps(state: any) {
  return {
    todoDetailData: state.detail,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoDetail)

function mapDispatchToProps(dispatch: any) {
  return {
    fetchDetail: (todo: ToDo) => {
      console.log('fetching details')
      dispatch(ToDoDetailAction.fetchDetail(todo))
    },
    resetState: () => {
      dispatch(ToDoDetailAction.resetState())
    },
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  backLink: {
    marginBottom: 5,
    color: '#22f',
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'rgba(237, 149, 45, 0.4)',
  },
  info: {
    alignItems: 'center',
  },
})
