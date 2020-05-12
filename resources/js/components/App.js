import React from 'react';
import ReactDOM from 'react-dom';
import Listing from './Listing/Listing';
import Create from './Create/Create';

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Create/>
                    <Listing/>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
