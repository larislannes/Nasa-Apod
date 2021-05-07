$("#botao").click(function (event) {
    event.preventDefault()
    var dataValue = $("#date").val()
    buscador(dataValue)
})


function buscador(data) {
    const key = 'mPQ7eqFL5heszXA31hwkDwXOYUdrHPd6QZJhIdaL'

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        dataType: 'json',
        success: function (dados) {
            document.getElementById('imagem').src = dados.url
            document.getElementById('titulo').innerText = dados.title
            document.getElementById('descricao').innerText = dados.explanation
        }
    })
}


