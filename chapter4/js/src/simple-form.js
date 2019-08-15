import {combineReducers, dispatch, registerStore, select, subscribe} from "@wordpress/data";
import editorReducer from "./reducers/core-editor";
import * as editorSelectors from "./selectors/core-editor";
import * as editorActions from "./actions/core-editor";

const NAMESPACE = "core/editor";

registerStore( NAMESPACE, {
	reducer: combineReducers( { editor: editorReducer } ),
	selectors: editorSelectors,
	actions: editorActions,
} );

$( function () {
	// Attach events
	$( '#title' ).on( 'keyup', function() {
		dispatch( NAMESPACE ).setPostTitle( this.value );
	} );

	$( '#slug' ).on( 'keyup', function() {
		dispatch( NAMESPACE ).setPostSlug( this.value );
	} );

	$( '#content' ).on( 'keyup', function() {
		dispatch( NAMESPACE ).setPostContent( this.value );
	} );

	$( '#excerpt' ).on( 'keyup', function() {
		dispatch( NAMESPACE ).setPostExcerpt( this.value );
	} );

	// Subscribe to changes
	subscribe( function() {
		const store = select( NAMESPACE );

		$( '#title' ).val( store.getEditedPostAttribute( 'title' ) );
		$( '#slug' ).val( store.getEditedPostAttribute( 'slug' ) );
		$( '#content' ).val( store.getEditedPostContent() );
		$( '#excerpt' ).val( store.getEditedPostAttribute( 'excerpt' ) );
	} );
} );
