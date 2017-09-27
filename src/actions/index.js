import constants from '../constants'

export default {

    submitComment: (newComment) => {
        return {
            type: constants.SUBMIT_COMMENT,
            payload: newComment
        }
    }

}