window.onload = function() {
    // --------- valida usuario logueado previamente ----------------//

    var logOk = localStorage.getItem("Login") == "true" ? alert ("usuario logueado") : alert("Usuario no logueado")

    // --------- variables ----------------//

    var camOk

    // --------- busca en html ----------------//
    
    var email = document.getElementById("email")
    var pass = document.getElementById("pass")
    var errMail = document.getElementById("errMail")
    var errPass = document.getElementById("errPass")
    var btnIniSes = document.getElementById("iniSes")
    var modal = document.getElementById("modalFalla")
    var span = document.getElementsByClassName("close")[0]

    // --------- inputs ----------------//

    email.addEventListener("blur", valEmail)
    email.addEventListener("focus", remErrMail)
    btnIniSes.addEventListener("click", verifTodo)

    span.onclick = function() {
        modal.classList.remove("block")
        modal.classList.add("oculto")
        }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("block")
            modal.classList.add("oculto")
        }
    }

    // --------- funciones validacion campos ----------------//

    function showErrMail () {
        errMail.classList.remove("oculto")
    }
    function remErrMail () {
        errMail.classList.add("oculto")
    }
    function showErrPass () {
        errPass.classList.remove("oculto")
    }
    function remErrPass () {
        errPass.classList.add("oculto")
    }
    function verifTodo () {
        camOk = 0
        valEmail()
        valPass()
        if (camOk == 2) {
            validaMail()
        }
    }

    // --------- valida campos ----------------//

    function valEmail () {
        var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if (!emailRegex.test(email.value)) {
            showErrMail()
        } else {
            remErrMail()
            camOk++
        }
    }
    function valPass () {
        if (pass.value == "") {
            showErrPass()
        } else {
            remErrPass()
            camOk++
        }
    }

    // --------- valida mail y contraseña ----------------//
    function validaMail () {

        fetch
        ("https://basic-server-one.vercel.app/login", 
            {
            method: 
                "POST",
            headers: 
                {"Content-Type": "application/json",},
            body: 
                JSON.stringify({
                    email: email.value,
                    password: pass.value})
            }
        )
        .then (function(respuesta) {
            if(respuesta.status === 200) {
                localStorage.setItem("Login", true)
                document.location.href = "./dashboard.html"
            } else {
                openModal()
            }
            return respuesta.json()
        })
    }

    function openModal () {
        modal.classList.remove("oculto")
        modal.classList.add("block")
    }
}