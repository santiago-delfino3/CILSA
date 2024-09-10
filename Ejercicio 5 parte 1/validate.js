/*VALIDACION DE CAMPOS */
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const mail = document.getElementById('email')
const pais= document.getElementById('pais')
const formulario = document.getElementById('form')
const parrafo= document.getElementById('warning')

function validacion(){
    let warning=""
    let regexespacio=/^\s+|\s+$/
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    let regexApe = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    entrar=false
    if(!regexName.test(nombre.value) || !regexespacio.test(nombre.value))
    {
        warning+='<i class="fa-solid fa-triangle-exclamation"></i>El nombre no es valido.<br>'
        entrar=true
    }
    if(!regexApe.test(apellido.value))
        {
            warning+='<i class="fa-solid fa-triangle-exclamation" style=": absolute; text-align: left;"></i>El apellido no es valido.<br>'
            entrar=true
        }
    
    if(!regexEmail.test(mail.value))
    {
        warning+='<i class="fa-solid fa-triangle-exclamation" style=": absolute; text-align: left;"></i>El correo no es valido.<br>'
        entrar=true
    }

    if(pais.value==null || pais.value=='')
        {
            warning+='<i class="fa-solid fa-triangle-exclamation" style=": absolute; text-align: left;"></i>Seleccione un pais<br>'
            entrar=true
        }

    if(entrar)
    {
        parrafo.innerHTML=warning
        alert("Hay datos incorrectos en el formulario. Revise las entradas");
        return false
        
    }
    else{
        alert("Datos correctos! se enviara formulario");
    }

    

}
    
