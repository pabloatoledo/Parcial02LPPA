window.onload = function() {

    fetch("https://basic-server-one.vercel.app/login", 
        {method: 
            "POST",
        headers: 
            {"Content-Type": "application/json",},
        body: 
            JSON.stringify({
                email: "valeria@gmai.com",
                password: "lppa2022"})
    })
    .then (function(respuesta) {
        return respuesta.JSON()
    }) 
    .then (function(datos) {
        console.log(datos, "todo ok")
    })
    .catch(function(error) {
        alert("Hubo un problema al enviar los datos, intente nuevamente!!!")
    })
}