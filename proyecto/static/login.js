const userdata = [
    {
        "email": "admin@gmail.com",
        "password": "superadmin"
    }
]


function getuserdata(){
    let inputEmail = document.getElementById("exampleInputEmail1").value;
    let inputPass = document.getElementById("exampleInputPassword1").value;
}

function apretarboton(){
    let inputEmail = document.getElementById("exampleInputEmail1").value;
    let inputPass = document.getElementById("exampleInputPassword1").value;

    let useremail = "admin@gmail.com";
    let userpass = "superadmin";
    
    if ( useremail === inputEmail && userpass === inputPass ) {
        alert(`Bienvenido Admin`)
    } else {
        //alert(`Usuario no encontrado en los registros.`)
        alert(`Email: ${useremail} / ${inputEmail}, Pass: ${userpass} / ${inputPass}`)
    }
}
