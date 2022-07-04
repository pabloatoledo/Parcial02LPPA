window.onload = function () {

    // --------- variables ----------------//
    var cont
    var linkDatos = "https://basic-server-one.vercel.app/users"
    var btnCierraSes = document.getElementById("cierraSes")

    // --------- Inputs ----------------//

    btnCierraSes.addEventListener("click", cierraSesion)

    // --------- llena tabla ----------------//

    fetch (linkDatos)

    .then(function(respuesta) {
        return respuesta.json()
    })
    .then(function(datos){
        cont = 1
        console.log(datos.data[0])
        datos.data.forEach(usuario => {
            var trNew = document.createElement("tr")
            var td1 = document.createElement("td")
            var td2 = document.createElement("td")
            var td3 = document.createElement("td")
            var td4 = document.createElement("td")
            var td5 = document.createElement("td")
            var td6 = document.createElement("td")
            var td7 = document.createElement("td")
            var td8 = document.createElement("td")
            var td9 = document.createElement("td")
            var td10 = document.createElement("td")
            var td11 = document.createElement("td")
            var td12 = document.createElement("td")
            var td13 = document.createElement("td")
            var td14 = document.createElement("td")
            var td15 = document.createElement("td")

            td1.innerHTML = usuario.id
            td2.innerHTML = usuario.name
            td3.innerHTML = usuario.username
            td4.innerHTML = usuario.email
            td5.innerHTML = usuario.address.street
            td6.innerHTML = usuario.address.suite
            td7.innerHTML = usuario.address.city
            td8.innerHTML = usuario.address.zipcode
            td9.innerHTML = usuario.address.geo.lat
            td10.innerHTML = usuario.address.geo.lng
            td11.innerHTML = usuario.phone
            td12.innerHTML = usuario.website
            td13.innerHTML = usuario.company.name
            td14.innerHTML = usuario.company.catchPhrase
            td15.innerHTML = usuario.company.bs
            
            trNew.appendChild(td1)
            trNew.appendChild(td2)
            trNew.appendChild(td3)
            trNew.appendChild(td4)
            trNew.appendChild(td5)
            trNew.appendChild(td6)
            trNew.appendChild(td7)
            trNew.appendChild(td8)
            trNew.appendChild(td9)
            trNew.appendChild(td10)
            trNew.appendChild(td11)
            trNew.appendChild(td12)
            trNew.appendChild(td13)
            trNew.appendChild(td14)
            trNew.appendChild(td15)

            document.getElementById("tablaUsuarios").appendChild(trNew)
            cont++
        });
    })
    .catch(function(error) {
        alert("Hubo un problema al enviar los datos, intente nuevamente!!!")
    })

    // --------- funciones ----------------//

    function cierraSesion () {
        localStorage.removeItem("Login")
        location.href = "./index.html"
    }
}