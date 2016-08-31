export default (state = 0, action) => {
    switch(action.type) {
        case 'POINT_SELECTED':
            return action.payload;
    }
    return state
}
