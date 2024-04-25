const app = () => {
    return {
        tipoEscolhido: 'motorcycles',
        fabricante: '',
        modelo: '',
        ano: '',

        fabricantes: [],
        // fabricanteSelecionado: [],
        modelos: [],
        anos: [],
        fipeSelecionado: [],

        anoSelecionado: false,
        botaoSelecionado: false,

        verificarTipo(tipo){
            this.tipoEscolhido = tipo;
            this.fabricante = '';
            this.modelo = '';
            this.ano = '';
            this.fabricantes = [];
            this.modelos = [];
            this.anos = [];
            this.botaoSelecionado = false;
            this.init();
           
        },

        init() {

            console.log(this.botaoSelecionado);
            
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
                this.anoSelecionado = true;
                console.log(response.data);
                console.log(this.anos)
                
             })
             .catch(function(error){
                console.log(error);
             })
         }, selecionarAno(){

            const url = `https://fipe.parallelum.com.br/api/v2/${this.tipoEscolhido}/brands/${this.fabricante}/models/${this.modelo}/years/${this.ano}`;

            axios.get(url)
            .then(response => {
              this.fipeSelecionado = response.data;
              console.log(this.fipeSelecionado)
             
            }).catch(function(error){
              console.log(error)
            })
         
         
        },
          buscarPreco(){
              this.botaoSelecionado = true;
              console.log(this.botaoSelecionado);  

             
              
          }

    }
}




