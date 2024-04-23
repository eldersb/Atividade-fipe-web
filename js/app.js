const app = () => {
    return {
        fabricante: '',
        fabricantes: [],
        fabricanteSelecionado: null,
        modelos: [],


        init() {
            axios.get('https://fipe.parallelum.com.br/api/v2/motorcycles/brands')
                .then((response) => {
                    this.fabricantes = response.data;
                    console.log(this.motos);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        selecionarFabricante(){
           
            
            const url = `https://fipe.parallelum.com.br/api/v2/motorcycles/brands/${this.fabricante}/models`
            

            axios.get(url)
             .then(response =>{
                this.modelos = response.data;
                console.log(modelo.id)
             })
             .catch(function(error){
                console.log(error);
             })
            
        }

    }
}




