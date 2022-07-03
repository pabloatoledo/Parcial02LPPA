window.onload = function () {
    var linkDatos = "https://basic-server-one.vercel.app/users"
    fetch (linkDatos)

    .then(function(respuesta) {
        return respuesta.json()
    })
    .then(function(datos){
        console.log(datos.data[0])
        datos.data.forEach(user => {
            console.log(user)
        });
    })
    .catch(function(error) {
        alert("Hubo un problema al enviar los datos, intente nuevamente!!!")
    })
}