import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Create extends Component {

    constructor () {
        super();
        this.state = {
            trip_date: '',
            items: [],
            newItem: ''
        }
        this.addItemHandler = this.addItemHandler.bind(this);
        this.changeFieldHandler = this.changeFieldHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    addItemHandler() {
        if (this.state.newItem != '') {
            let items = this.state.items;
            items.push(this.state.newItem);
            this.setState({
                items: items,
                newItem: ''
            })
        }
    }

    changeFieldHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler() {
        if (!this.state.trip_date || !this.state.items.length) {
            return false;
        }

        // submit
        axios.post('/api/save_list', [
            this.state.trip_date,
            this.state.items,
        ])
        .then(response => {
            this.setState({
                trip_date: '',
                items: []
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Creating New List</h1>
                </div>
                <div className="card">
                    <div className="card-header">
                        <label>Date:</label>
                        <input type="date"
                            value={this.state.trip_date}
                            onChange={this.changeFieldHandler}
                            name="trip_date">
                        </input>
                    </div>
                    <div className="card-body">
                        <ul>
                            {
                                this.state.items.map((item, index) =>
                                <li key={index}>{item}</li>
                                )
                            }
                            <label>New Item:</label>
                            <input
                                type="text"
                                name="newItem"
                                value={this.state.newItem}
                                onChange={this.changeFieldHandler}
                                ></input>
                        </ul>
                        <button
                            type="button"
                            className="btn btn-primary btn-small"
                            onClick={this.addItemHandler}
                            >
                            Add New Item
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-block"
                            onClick={this.submitHandler}
                            >
                            Save List
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;