import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./ToDoList.css";

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value ="";

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        console.log("Key in deleteItem: " + key);
        console.log("Items at delete: " + this.state.items);

        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });

    this.setState({
        items: filteredItems
    });
    }

    render() {
       return (
        <div className="App">
        <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                    placeholder="wpisz zadanie">
            </input>
            <button type="submit">dodaj</button>
            </form>
            </div>
            <TodoItems entries={this.state.items}
                        delete={this.deleteItem}/>
        </div>
        </div>
        ); 
    }
}

export default ToDoList;