import rootReducer from "./reducers";
import { createStore } from "redux";
import { setFormContent, setFormExcerpt, setFormSlug, setFormTitle } from "./actions/form";

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

$( function () {
	// Attach events
	$( '#title' ).on( 'keyup', function() {
		store.dispatch( setFormTitle( this.value ) );
	} );

	$( '#slug' ).on( 'keyup', function() {
		store.dispatch( setFormSlug( this.value ) );
	} );

	$( '#content' ).on( 'keyup', function() {
		store.dispatch( setFormContent( this.value ) );
	} );

	$( '#excerpt' ).on( 'keyup', function() {
		store.dispatch( setFormExcerpt( this.value ) );
	} );

	// Subscribe to changes
	store.subscribe( function() {
		const state = store.getState();

		$( '#title' ).val( state.form.title );
		$( '#slug' ).val( state.form.slug );
		$( '#content' ).val( state.form.content );
		$( '#excerpt' ).val( state.form.excerpt );
	} );
} );
