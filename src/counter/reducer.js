export const counterReducer = (
    state = {value: 42, toggled: true, success: false, buttons: [0, 0, 0]},
    {type, payload}
) => {
    switch (type) {
        case 'INCREMENT':
            return { value: state.value + 1, toggled: state.toggled, success: state.success, buttons: state.buttons}
        case 'DECREMENT':
            return { value: state.value - 1, toggled: state.toggled, success: state.success, buttons: state.buttons}
        case 'TOGGLED':
            return {value: state.value, toggled: !state.toggled, success: state.success, buttons: state.buttons}
        case 'CHANGE_SUCCESS':
            return {value: state.value, toggled: state.toggled, success: true, buttons: state.buttons}
        case 'BUTTON_CLICK':
            const newButtons = state.buttons;
            newButtons[payload] = 1;
            return {value: state.value, toggled: state.toggled, success: true, buttons: newButtons}
        default:
            return state;
    }
}