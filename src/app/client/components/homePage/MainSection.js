/**
 * Created by Roi on 30/07/2016.
 */
import React, { Component } from 'react'
import UserInfo from './mainSection/UserInfo'
import TodoInput from './mainSection/TodoInput'
import TodoList from './mainSection/TodoList'
import DateCom from './mainSection/Date'

class MainSection extends Component {

    render() {
        return (
            <section className='main-section'>
                <div className='container'>
                    <div><h1>Todo List</h1></div>
                    <UserInfo user={this.props.user} actions={this.props.actions}/>
                    <TodoInput addTodo={this.props.actions.addTodo}/>
                    <TodoList actions={this.props.actions} todos={this.props.todos}/>
                    <DateCom changeDate={this.props.actions.changeDate} date={this.props.date}/>
                </div>
            </section>
        )
    }
}

export default MainSection