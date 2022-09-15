// Initial Handshake
console.log('SCRIPT - app.js: Loaded!');

const app = new Vue({
    el: '#app',

    data: {
        contacts: contactsData,
    }
});

console.log('DEBUG - app: ', app);