import React from 'react';
import {Link} from 'react-router'

class app extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'app';
    }
    render() {
        return <div>
        	{this.props.children}
        	<Link to='test' >TEST</Link><br/>
        	<a href='test'>test</a> <br/>
        	<Link to='/' >MAIN</Link><br/>
        	<a href='/'>Main a</a>
        </div>;
    }
}

export default app;
