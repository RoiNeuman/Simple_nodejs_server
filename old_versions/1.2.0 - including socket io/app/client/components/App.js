/**
 * Created by Roi on 21/07/2016.
 */
import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../redux/actions'
import UserInfo from './UserInfo'
import DateCom from './Date'

class App extends Component {

    render() {
        return (
            <div>
                <div><h1>Todo List</h1></div>
                <UserInfo user={this.props.user} actions={this.props.actions}/>
                <TodoInput addTodo={this.props.actions.addTodo}/>
                <TodoList actions={this.props.actions} todos={this.props.todos}/>
                <DateCom changeDate={this.props.actions.changeDate} date={this.props.date}/>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)