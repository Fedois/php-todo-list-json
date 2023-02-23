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
                todo: this.newTodo
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((response) => {
                // console.log(response);
                this.todo = response.data;
                console.log(response.data)

                this.newTodo.title = '';
            });
        }
    },
    created() {
        axios
            .get(this.apiUrl)
            .then((response) => {
                console.log(response);
                this.todo = response.data;
            });
    }
}).mount('#app');