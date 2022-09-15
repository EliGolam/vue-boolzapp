// Initial Handshake
console.log('SCRIPT - app.js: Loaded!');

const app = new Vue({
    el: '#app',

    data: {
        contacts: contactsData,
    },

    // METHODS
    methods: {
        // DOM utilities
        getProfilePicturePath(contact) {
            return PROF_IMG_PATH + PROF_IMG_PREFIX + contact.avatar + PROF_IMG_FORMAT;
        }, 

        getProfilePictureAlt(contact) {
            return `Profile Picture of ${contact.name}`;
        }, 

        getLastMessage(contact) {
            let messageAmount = contact.messages.length;
            console.log('DEBUG - number of messages:', messageAmount);
            return contact.messages[messageAmount - 1].message;
        }
    },

    // MOUNTED
    mounted () {
        // console.log('DEBUG - test function getProfilePicturePath', this.getProfilePicturePath(this.contacts[3]));
    }
});

console.log('DEBUG - app: ', app);