

function verificar() {
    var us = document.getElementById("t1").value;
    var ps = document.getElementById("t2").value;
    var u = "andres";
    var c = "contra12";

    if (us == u && ps == c) {
        window.location.href = 'pagina2.html';
    } else {
        window.alert("Vuelva a intentar");
    }

}

