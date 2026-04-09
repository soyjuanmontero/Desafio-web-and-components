const contactComponentEl=(el)=>{
    const contactContainerEl=document.createElement("div")
    
    

  contactContainerEl.innerHTML=`<div class="container-contacto">
      <h2 class="contacto_title">Escribime</h2>
      <form action="" class="contacto" >
        <div class="field">
  <label for="name" class="label">Nombre</label>
  <div class="control">
    <input class="input" type="text" placeholder="Tu nombre" id="name" name="nombre" autocomplete="nombre">
  </div>
</div>
<div class="field">
  <label for="email" class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="Tu@mail.com" id="email" name="correo" autocomplete="email">
  </div>  
</div>
<div class="field contacto_textarea">
  <label for="message" class="label">Mensaje</label>
  <div class="control">
    <textarea class="textarea" name="mensaje"  id="message"></textarea>
  </div>
</div>
<div class="container__boton">

</div>
      </form>

     </div>`
     
el.appendChild(contactContainerEl)

const buttonSectionEl=document.querySelector('.container__boton')
buttonComponent(buttonSectionEl)

}




function capturarDatosDelForm(){
    const formEl=document.querySelector(".contacto")
    
    formEl.addEventListener('submit', async (e)=>{

        e.preventDefault()
        const datos = new FormData(formEl);
        const objetoDatos = Object.fromEntries(datos.entries());
       
 const data = {
    to: "juanmanuel231295@gmail.com", 
    message: `
    
    Email: ${objetoDatos.correo},<br>
    Nombre: ${objetoDatos.nombre},<br>
    Mensaje:${objetoDatos.mensaje} `
  }


  try{
    const response= await fetch('https://apx.school/api/utils/email-to-student',
        {
            method:'POST',
            headers:{'content-type':'aplication/json'},
            body:JSON.stringify(data) 

        }
    )
    if (response.ok) {
      alert("¡Email enviado con éxito!");
      
      
      formEl.reset(); 
      
      
    } else {
      alert("Error en el servidor");
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
  
        
    })

}





