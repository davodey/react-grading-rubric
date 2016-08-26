export default (state = null, action) => {
    switch(action.type) {
        case 'DESCRIPTIONS_TOGGLED':
            return action.payload;
    }
    return state
}
