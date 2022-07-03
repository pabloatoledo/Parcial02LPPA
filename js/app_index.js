window.onload = function() {
    fetch("https://basic-server-one.vercel.app/login", 
        {method: 
            "POST",
        headers: 
            {"Content-Type": "application/json",},
        body: 
            JSON.stringify({
                email: "valeria@gmail.com",
                password: "lppa2022"})
    })
    .then (function(respuesta) {
        if(respuesta.status === 200) {
            console.log("valido el usuario")
        } else {
            console.log("No valido el usuario")
        }
        return respuesta.json()
    })
}