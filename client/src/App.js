import React, { Component } from 'react';
import './App.css';
import ToDoList from "./ToDoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                username: "Jordan",
                todo: "clean room",
                isDone: false
                },
                {
                    username: "Jordan",
                    todo: "cut grass",
                    isDone: false
                },
                {
                    username: "Jordan",
                    todo: "cook dinner",
                    isDone: false
                }]
        }
    }
    deleteByID =(id) =>{
        console.log("Delete this ID: " + id);

        fetch('api/todo',
            {
                method: "DELETE",
                body: JSON.stringify({"id":id}),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data =>data.json())
            .then((res) => {
                if (!res.success){this.setState({error: res.error});
                }
            })
    }

    // textInput =(todoTxt) =>{
    //     console.log("Add item:");
    //
    //     fetch('api/todo',
    //         {
    //             method: "POST",
    //             body: JSON.stringify({"username": "Jordan", "todo":todoTxt,"isDone": "false"}),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         })
    //         .then(data =>data.json())
    //         .then((res) => {
    //             if (!res.success)
    //             {
    //                 this.setState({error: res.error});
    //             }
    //             else
    //             {
    //                 // Create was successful
    //                 data =>data.json().then(response => this.setState({data:response});
    //             }
    //             })
    //     }



        render() {

            fetch('api/todos/Jordan')
                .then(data =>data.json()).then(response => this.setState({data:response}));
    return (
      <div className="App">
        <p className="App-intro">
            <ToDoList toDoArr={this.state.data} deleteFunction={this.deleteByID}/>
        </p>
      </div>
    );
  }
}

export default App;
