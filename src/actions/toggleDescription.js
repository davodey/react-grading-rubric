export function toggleDescription (event) {

    function isChecked(event) {
        return event.target.checked;
    }

    let checked = isChecked(event);

    return {
        type: 'DESCRIPTIONS_TOGGLED',
        payload: checked
    };
}

