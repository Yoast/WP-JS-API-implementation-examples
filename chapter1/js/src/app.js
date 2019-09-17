import React from "react";
import ReactDOM from "react-dom";

import SimpleForm from "./simple-form-react";

class App extends React.Component {
	render() {
		return ( <SimpleForm /> );
	}
}

ReactDOM.render( <App/>, document.getElementById( "root" ) );
