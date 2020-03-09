const vm = new Vue({

    el: "#app",

    data: {
        produtos: [],
        produto: false
    },

    filters: {
        // Transforma um número no formato da moeda [pt-br]
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
        },

        // Puxa um produto específico pelo id
        fetchProduto(id) {
            fetch(`./api/produtos/${id}/dados.json`)
                .then( response => response.json())
                .then( json =>  this.produto = json)
        },

        // Fecha a modal ao se clicar fora dela
        fecharModal({ target, currentTarget }) {
            if(target === currentTarget) this.produto = false
        },

        // Chamado ao abrir a modal
        abrirModal(id) {
            this.fetchProduto(id)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    },
    
    created() {
        this.fetchProdutos()
    },
})