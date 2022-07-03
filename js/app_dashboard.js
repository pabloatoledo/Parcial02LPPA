window.onload = function () {
    var linkDatos = "https://basic-server-one.vercel.app/users"
    fetch (linkDatos)

    // .then((response) => response.json()) //2
    // .then((user) => {
    //     console.log(user.json()); //3
    // });

    .then(function(respuesta) {
        return respuesta.json()
    })
    .then(function(datos){
        //console.log(datos.json())
        console.log(datos.data[0])
    })
    .catch(function(error) {
        alert("Hubo un problema al enviar los datos, intente nuevamente!!!")
    })
}