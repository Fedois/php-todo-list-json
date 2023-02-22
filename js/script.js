const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: './api.php',
            students: [],
            boh: 'ciao',
            singleStudent: null
        };
    },
}).mount('#app');