const app = () => {
    return {
        motos: [],

        init() {
            axios.get('https://fipe.parallelum.com.br/api/v2/motorcycles/brands')
                .then((response) => {
                    this.motos = response.data;
                    console.log(this.motos);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }
}




