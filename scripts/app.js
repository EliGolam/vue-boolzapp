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
            let sender = contact.messages[messageAmount - 1].status === 'sent' ? 'You: ' : '';
            let previewMessage = `${sender}${contact.messages[messageAmount - 1].message}`;
            
            return previewMessage;
        }, 

        getLastMessageTime(contact) {
            let messageAmount = contact.messages.length;
            return this.getMessageTime(contact, messageAmount - 1); 
        }, 

        getMessageTime(contact, messageIdx) {
            let messageTime = contact.messages[messageIdx].date.split(' ');

            return messageTime[1].slice(0, -3);
        }
     },

    // MOUNTED
    mounted () {
        // console.log('DEBUG - test function getProfilePicturePath', this.getProfilePicturePath(this.contacts[3]));
    }
});

console.log('DEBUG - app: ', app);