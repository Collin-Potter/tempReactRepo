let id = 0;

const defaultOptions = {
    color: "#6796e6"
};

export default function createToast(options) {
    console.log('Attempting to createToast...');
    return {
        ...defaultOptions,
        ...options,
        id: id++
    }
}