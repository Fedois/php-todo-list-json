const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: './database.json',
            todo: []
        };
    },
    created() {
        axios
            .get(this.apiUrl)
            .then((response) => {
                console.log(response);
                this.todo = response.data;
                console.log(this.todo)
            });
    }
}).mount('#app');