// Initial Handshake
console.log('SCRIPT - app.js: Loaded!');

const app = new Vue({
    el: '#app',

    data: {
        contacts: contactsData,
    },

    // METHODS
    methods: {
        // Profile Pictures
        getProfilePicturePath(contact) {
            return PROF_IMG_PATH + PROF_IMG_PREFIX + contact.avatar + PROF_IMG_FORMAT;
        }
    },

    // MOUNTED
    mounted () {
        console.log('DEBUG - test function getProfilePicturePath', this.getProfilePicturePath(this.contacts[3]));
    }
});

console.log('DEBUG - app: ', app);