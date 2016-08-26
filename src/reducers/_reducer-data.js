export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            return [ action.payload.data ];
    }
    return state
}
