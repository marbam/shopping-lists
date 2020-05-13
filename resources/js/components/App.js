import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Listing from './Listing/Listing';
import Create from './Create/Create';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <Route path="/" exact render= {() => <Link to='/create'>Create</Link>} />
                        <Route path="/" exact component={Listing} />
                        <Route path="/create" exact render={() => <Link to='/'>Home</Link>} />
                        <Route path="/create" exact component={Create} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
