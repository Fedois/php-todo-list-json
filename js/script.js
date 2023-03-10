const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: './api.php',
            createUrl: './create.php',
            newTodo: {
                title: '',
                done: false,
            },
            todo: [],
        };
    },
    methods: {
        addTodo() {
            axios.post(this.createUrl, {
                todocreated: this.newTodo
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                this.todo = response.data;
                console.log(this.todo)

                this.newTodo.title = '';
            });
        }
    },
    created() {
        axios
            .get(this.apiUrl)
            .then((response) => {
                this.todo = response.data.data;
            });
    }
}).mount('#app');