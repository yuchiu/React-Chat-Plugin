import constants from '../constants'

const initialState = {
    comments: [

    ]
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {

        case constants.SUBMIT_COMMENT:

            console.log('submit comment')
            return newState
            break;
        default:
            return state
    }

}