import { EDIT_POST, UPDATE_BLOCK_ATTRIBUTES } from "../actions/core-editor";

const INITIAL_STATE = {
	present: {
		edits: {},
		blocks: {}
	}
};

/**
 * Reducer for the editor data.
 *
 * @param {Object} state  The current state.
 * @param {Object} action The current action.
 *
 * @returns {Object} The new state.
 */
export default function editorReducer( state = INITIAL_STATE, action ) {
	switch ( action.type ) {
		case EDIT_POST:
			return {
				present: {
					...state.present,
					edits: {
						...state.present.edits,
						...action.edits,
					}
				}
			};

		case UPDATE_BLOCK_ATTRIBUTES:
			return {
				present: {
					...state.present,
					blocks: {
						...state.present.blocks,
						byClientId: {
							[action.clientId]: {
								attributes: { ...action.attributes }
							}
						}
					}
				}
			};
	}

	return state;
}
