import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List/List';

class Listing extends Component {

    constructor () {
        super();
        this.state = {
            lists: []
        }
    }

    componentDidMount () {
        axios.get('/api/get_lists').then(response => {
          this.setState({
            lists: response.data
          })
        })
    }

    render() {
        return (
            <div>
                {this.state.lists.map((l) =>
                    <List data={l}/>
                )}
            </div>
        );
    }
}

export default Listing;