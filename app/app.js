import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './pages/resume';

class HelloReact extends React.Component {

    render() {
        return (
            <div>
                <Resume />
            </div>
        )
    }
}

ReactDOM.render(<HelloReact />, document.getElementById('app'));