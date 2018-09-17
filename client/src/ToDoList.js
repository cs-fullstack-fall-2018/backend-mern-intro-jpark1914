import React, {Component} from 'react'

class ToDoList extends Component {

    thisIsAMapFunction(eachItem) {
        var thisIsAFunction = function () {
            if (eachItem.isDone === true) {
                eachItem.isDone = "is Done"
            } else if (eachItem.isDone === false) {
                eachItem.isDone = "is not done"
            }
        }
            return (
                <div>
                    {thisIsAFunction()}
                    <p>{eachItem._id}</p>
                    <p>{eachItem.username} needs to {eachItem.todo}.</p>
                    <p> Is it done: {eachItem.isDone}</p>
                    <button onClick={() => this.props.deleteFunction(eachItem._id)}>Delete</button>

                    <hr/>
                </div>
            )
        }


    render() {
        var forEachItem = this.props.toDoArr.map((eachItem) => this.thisIsAMapFunction(eachItem));
        return (
            <div>
                <p>{forEachItem}</p>
                {/*<input type="text"/>*/}
                {/*<input type="submit"/>*/}
            </div>
        );
    }
}


export default ToDoList;