const sw = new Vue({
    el: '#sw-root',
    data:{
        grupoPersonagens: []
    },
    methods: {
  
      listarPersonagens: function(nome){
        this.grupoPersonagens = [];
        const url = `https://swapi.co/api/people/?search=${nome}`;
              
        const sw = fetch(url)
                  .then(response => response.json())
                  .then(response => {
                      response.results.map(personagem => {
                          this.grupoPersonagens.push(personagem);
                      });
                  });
      },

      pesquisarPersonagens: function(){
        let campo_pesquisa = document.querySelector("#pesquisa").value
        if(campo_pesquisa != ""){
          this.listarPersonagens(campo_pesquisa);
        }
      }
      
    }
  })


