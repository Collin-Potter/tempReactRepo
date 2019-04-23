import createToast from "../factories/createToast";
import { ADD_TOAST, REMOVE_TOAST } from "../constants/ToastConstants";

export function addToast(options = {}) {
    console.log('Attempting to addToast...');
    return {
        payload: createToast(options),
        type: ADD_TOAST
    };
}

export function removeToast(id) {
    console.log('Attempting to removeToast...');
    return {
        payload: id,
        type: REMOVE_TOAST
    };
}