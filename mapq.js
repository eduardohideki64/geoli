function buscarClima() {
    var cidade = document.getElementById('cidade').value;


    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=b70c38a9eaf04b6eb7966be6a363c311';
    // Fazer uma solicitação GET à API usando fetch()
    fetch(apiUrl)
    //
        .then(response => {
            if (!response.ok)
            //verifica se a resposta esta de acordo, caso não esteja manda a mensagem abaixo 
        {
                throw new Error('verifique o nome da cidade e tente novamente');
            }
            const retorno = response.json(); // converte a resposta em JSON  
            return retorno;
        })
        .then(data => {

            console.log(data.coord.lat);
            var latitude = data.coord.lat;
            console.log(latitude);
            //console log exerce a função de exibir os dados
            // é armazenados os dados de lat e coord da api a variavel latitude e long
            console.log(data.coord.lon);
            var longitude = data.coord.lon;
            console.log(longitude);

            criarMapa(latitude, longitude);
            // mapa criado a partir desses dados da api, convertidos em variaveis
           

        })
        .catch(error => {
            alert(error);
        });

}

function criarMapa(latitude, longitude)
 //cria um mapa de acordo com os dados retirados

 {
    L.mapquest.key = 'QPvorRdaS7u72yH71W60nJbUjnpbswSs';

    // 'map' refers to a <div> element with the ID map
    L.mapquest.map('map', {
        center: [latitude, longitude],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });
}