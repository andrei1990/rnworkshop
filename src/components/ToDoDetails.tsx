import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native'
import { connect } from 'react-redux'
import ToDo from '../model/ToDo'
import ToDoDetailState from '../state/todo/ToDoDetailsState'
import ToDoDetailAction from '../actions/tododetail/ToDoDetailAction'


interface ToDoDetailProps {
  initialToDoData: ToDo,
  onBack: () => any,
  fetchDetail: ((deal: ToDo) => any)
  todoDetailData: ToDoDetailState,
}

class ToDoDetail extends Component<ToDoDetailProps> {

  constructor(props: ToDoDetailProps) {
    super(props)
  }

  componentDidMount() {
    console.log('fetching details')
    this.props.fetchDetail(this.props.initialToDoData)
  }

  handlePress: any = () => {
    console.log('pressed item')
    this.props.onBack
  }

  render() {
    let todo = this.props.initialToDoData
    return (
        <View>
            <TouchableOpacity onPress={this.props.onBack}>
                <Text style={styles.backLink}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.title} >
                <View style={styles.info}>
                <Text style={styles.title}>{todo.name}</Text>
                </View>
            </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state: any) {
  return {
    todoDetailData: state.detail
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoDetail)

function mapDispatchToProps(dispatch: any) {
  return {
    fetchDetail: (todo: ToDo) => {
      console.log('fetching details')
      dispatch(ToDoDetailAction.fetchDetail(todo))
    }
  }
}

const styles = StyleSheet.create({
  backLink: {
    marginBottom: 5,
    color: '#22f',
    marginLeft: 10
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'rgba(237, 149, 45, 0.4)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  info: {
    alignItems: 'center',
  },
  user: {
    alignItems: 'center',
  },
  cause: {
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  description: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'dotted',
    margin: 10,
    padding: 10,
  },
})
