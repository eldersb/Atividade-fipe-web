const app = () => {
    return {
        tipoEscolhido: 'motos',
        fabricante: '',
        modelo: '',
        fabricantes: [],
        fabricanteSelecionado: [],
        modelos: [],
        anos: [],


        init() {
            axios.get('https://fipe.parallelum.com.br/api/v2/motorcycles/brands')
                .then((response) => {
                    this.fabricantes = response.data;
                    console.log(this.fabricante);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        selecionarFabricante(){
            // console.log(this.fabricante)
            // console.log(this.fabricantes)
            // console.log(this.fabricanteSelecionado)
            // console.log(this.modelos)
            
            const url = `https://fipe.parallelum.com.br/api/v2/motorcycles/brands/${this.fabricante}/models`

            
            this.modelos = [];
            axios.get(url)
             .then(response =>{
                this.modelos = response.data;
                console.log(response.data);
                
             })
             .catch(function(error){
                console.log(error);
             })
            
        },
        selecionarModelo(){
            const url = `https://fipe.parallelum.com.br/api/v2/motorcycles/brands/${this.fabricante}/models/${this.modelo}/years`

            this.anos = [];
            axios.get(url)
             .then(response =>{
                this.anos = response.data;
                console.log(response.data);
                
             })
             .catch(function(error){
                console.log(error);
             })
        }

    }
}




