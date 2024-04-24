const app = () => {
    return {
        tipoEscolhido: 'motorcycles',
        fabricante: '',
        modelo: '',
        fabricantes: [],
        fabricanteSelecionado: [],
        modelos: [],
        anos: [],

        verificarTipo(tipo){
            this.tipoEscolhido = tipo;
            this.fabricante = '';
            this.modelo = '';
            this.fabricantes = [];
            this.modelos = [];
            this.anos = [];
            this.init();
           
        },

        init() {
            
            let url;
           

                if(this.tipoEscolhido === 'motorcycles'){
                     url = `https://fipe.parallelum.com.br/api/v2/motorcycles/brands`
                } else if(this.tipoEscolhido === 'trucks'){
                    url = `https://fipe.parallelum.com.br/api/v2/trucks/brands`
                } else if(this.tipoEscolhido === 'cars'){
                    url = `https://fipe.parallelum.com.br/api/v2/cars/brands`
                }

                // console.log(url);

                    axios.get(url)
                     .then((response) => {
                         this.fabricantes = response.data;
                        console.log(this.fabricante);
                     })
                     .catch(function (error) {
                         console.log(error);
                     })
                
               
             },
             selecionarFabricante(){
        

            const url = `https://fipe.parallelum.com.br/api/v2/${this.tipoEscolhido}/brands/${this.fabricante}/models`

            
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
            const url = `https://fipe.parallelum.com.br/api/v2/${this.tipoEscolhido}/brands/${this.fabricante}/models/${this.modelo}/years`

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




