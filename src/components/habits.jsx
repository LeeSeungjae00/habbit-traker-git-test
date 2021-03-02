import React, { Component } from 'react'
import Habit from './habit'
import HabitAddForm from './habitAddForm'

export default class Habits extends Component {

    render() {
        return (
            <>
            <HabitAddForm onAdd = {this.props.onAdd}></HabitAddForm>
            <ul>
                {this.props.habits.map(habit => <Habit 
                onIncrement = {this.props.onIncrement} 
                onDecrement = {this.props.onDecrement}
                onDelete = {this.props.onDelete}
                key = {habit.id} 
                habit = {habit}></Habit>)}
            </ul>
            <button className = "habits-reset" onClick = {this.props.onReset} >Reset</button>
            </>
        )
    }
}
