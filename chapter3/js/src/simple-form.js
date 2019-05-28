import rootReducer from "./reducers";
import {dispatch, registerStore, select, subscribe} from "@wordpress/data";
import * as selectors from "./selectors";
import * as actions from "./actions";

registerStore( "yoast/api-example", {
	reducer: rootReducer,
	selectors,
	actions,
} );

window.wp = {};
window.wp.select = select;

$( function () {
	// Attach events
	$( '#title' ).on( 'keyup', function() {
		console.log( "test" );
		dispatch( "yoast/api-example" ).setFormTitle( this.value );
	} );

//	$( '#slug' ).on( 'keyup', function() {
//		dispatch( setFormSlug( this.value ) );
//	} );
//
//	$( '#content' ).on( 'keyup', function() {
//		dispatch( setFormContent( this.value ) );
//	} );
//
//	$( '#excerpt' ).on( 'keyup', function() {
//		dispatch( setFormExcerpt( this.value ) );
//	} );

	// Subscribe to changes
	subscribe( function() {
		$( '#title' ).val( select( "yoast/api-example" ).getTitle() );
//		$( '#slug' ).val( state.form.slug );
//		$( '#content' ).val( state.form.content );
//		$( '#excerpt' ).val( state.form.excerpt );
	} );
} );
