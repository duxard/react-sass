import React from 'react';
import ReactDOM from 'react-dom';

import HeaderMenu from './HeaderMenu';


class App extends React.Component{
    render(){
        return (
            <div>
                <HeaderMenu />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('wrapper'));
