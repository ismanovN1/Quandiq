const SET_COLS = 'Store/SET_COLS'
const SET_ROWS = 'Store/SET_ROWS'
const SET_RESULT = 'Store/SET_RESULT'

const initialiser = {
    cols: 7,
    rows: 2,
    result: []
}

const MathReducer = (state = initialiser , action) => {
    switch (action.type) {
        case SET_COLS:
            return {...state , cols: action.value }
        case SET_ROWS:
            return {...state , rows: action.value }
        case SET_RESULT:
            return {...state , result: action.value }
        default:
            return state
    }
}
export default MathReducer

export const SetColsAC = (value) =>({ type: SET_COLS, value })
export const SetRowsAC = (value) =>({ type: SET_ROWS, value })
export const SetResultAC = (value) =>({ type: SET_RESULT, value })