export const initialState = {
    basket: [],
    user: null,
}

export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}