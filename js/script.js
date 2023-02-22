const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: './api.php',
            todo: [],
        };
    },
    created() {
        axios
            .get(this.apiUrl)
            .then((response) => {
                console.log(response);
                this.todo = response.data;
                console.log(response.data);
            });
    }
}).mount('#app');