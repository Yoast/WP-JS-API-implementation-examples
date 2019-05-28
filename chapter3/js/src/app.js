import React from 'react';
import ReactDOM from "react-dom";
import rootReducer from "./reducers";
import * as selectors from "./selectors";
import * as actions from "./actions";

import SimpleForm from "./simple-form-react";
import {registerStore} from "@wordpress/data";


registerStore( "yoast/api-example", {
	reducer: rootReducer,
	selectors,
	actions,
} );

class App extends React.Component {
	render() {
		return (
			<SimpleForm />
		)
	}
}

ReactDOM.render( <App/>, document.getElementById( "root" ) );
