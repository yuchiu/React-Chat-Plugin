import constants from '../constants'

let initialState = {
    comments: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case constants.FETCH_COMMENTS:

            console.log('inside fetchcomment reducer '+ action.payload)
            newState.comments= action.payload

            return newState
            break;

        case constants.SUBMIT_COMMENT:

            console.log('submit comment')
            return newState
            break;
        default:
            return state
    }

}