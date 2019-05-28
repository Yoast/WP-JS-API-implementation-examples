import rootReducer from "./reducers";
import {dispatch, registerStore, select, subscribe} from "@wordpress/data";
import * as selectors from "./selectors";
import * as actions from "./actions";

const NAMESPACE = "yoast/api-example";

registerStore( NAMESPACE, {
	reducer: rootReducer,
	selectors,
	actions,
} );

$( function () {
	// Attach events
	$( '#title' ).on( 'keyup', function() {
		dispatch( NAMESPACE ).setFormTitle( this.value );
	} );

	$( '#slug' ).on( 'keyup', function() {
		dispatch( NAMESPACE ).setFormSlug( this.value );
	} );

	$( '#content' ).on( 'keyup', function() {
		dispatch( NAMESPACE ).setFormContent( this.value );
	} );

	$( '#excerpt' ).on( 'keyup', function() {
		dispatch( NAMESPACE ).setFormExcerpt( this.value );
	} );

	// Subscribe to changes
	subscribe( function() {
		$( '#title' ).val( select( NAMESPACE ).getTitle() );
		$( '#slug' ).val( select( NAMESPACE ).getSlug() );
		$( '#content' ).val( select( NAMESPACE ).getContent() );
		$( '#excerpt' ).val( select( NAMESPACE ).getExcerpt() );
	} );
} );
