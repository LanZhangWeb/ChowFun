export default {
    getItem: function(key) {
        let value;

        try {
            value = localStorage.getItem(key);
        } catch(ex) {
            if (__DEV__) {
                console.error('localStorage.getItem error', ex.message);
            }
        } finally {
            return value;
        }
    },
    setItem: function(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch(ex) {
            if (__DEV__) {
                console.error('localStorage.setItem error', ex.message);
            }
        }
    }
}