import constants from '../constants'

let initialState = {
    comments: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case constants.FETCH_COMMENTS:
            newState.comments= action.payload

            return newState
            break;
        default:
            return state
    }

}