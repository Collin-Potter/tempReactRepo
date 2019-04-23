import { ADD_TOAST, REMOVE_TOAST } from "../constants/ToastConstants";

export default function toasts(state = [], action) {
    const { payload, type } = action;
  
    switch (type) {
        
        case ADD_TOAST:
            console.log('ADD_TOAST called!');
            console.log(payload);
            return [...state, payload];

        case REMOVE_TOAST:
            console.log('REMOVE_TOAST called!');
            return state.filter(toast => toast.id !== payload);
            
        default:
            console.log('Unrecognized toast type... ' + type);
            return state;
    }
}