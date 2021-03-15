const hello =  ({

    data() {
        return {
            toggleModal: false
        }
    },

    methods: {
         modal() {
            
            this.toggleModal = !this.toggleModal
        }
    },
})



Vue.createApp(hello).mount('#app')



