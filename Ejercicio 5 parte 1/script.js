
/* FUNCION PARA ALTERNAR MODO OSCURO Y CLARO */
const DarkMode = () =>{
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("#dl-icon").setAttribute("class","bi bi-sun-fill");

    
}

const LightkMode = () =>{
    document.querySelector("body").setAttribute("data-bs-theme","light");
    document.querySelector("#dl-icon").setAttribute("class","bi bi-moon-fill");
  
    
}
const CambiaTema = () =>{
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    DarkMode():LightkMode();
}

/*FUNCION PARA VALIDAR */
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
    return false
  })()