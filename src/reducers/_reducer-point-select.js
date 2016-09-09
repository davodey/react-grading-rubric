export default (state = {stateScore: true}, action) => {
    switch(action.type) {
        case 'POINT_SELECTED':
            return action.payload;
    }
    return state
}
