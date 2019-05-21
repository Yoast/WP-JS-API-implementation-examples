import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore } from "redux";

import SimpleForm from "./simple-form-react";

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
	render() {
		return (
			<Provider store={ store }>
				<SimpleForm />
			</Provider>
		)
	}
}

ReactDOM.render( <App/>, document.getElementById( "root" ) );
