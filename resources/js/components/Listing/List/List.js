import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class List extends Component {

    constructor () {
        super();
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Date: {this.props.data.trip_date}</div>
                <div className="card-body">
                    <ul>
                        {
                            this.props.data.items.map((item) =>
                                <li>{item.text}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default List;