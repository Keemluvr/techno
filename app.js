const vm = new Vue({

    el: "#app",

    data: {
        produtos: []
    },

    filters: {
        numeroPreco(valor) {
            const formatter = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL' 
            });
            return formatter.format(valor);
        }
    },

    methods: {
        // Puxa os produtos 
        fetchProdutos() {
            fetch('./api/produtos.json')
                .then( response => response.json())
                .then( json => this.produtos = json)
        }
    },
    
    created() {
        this.fetchProdutos()
    },
})