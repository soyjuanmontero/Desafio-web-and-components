

const headerComponent=(el)=>{
  const headerContainerEl=document.createElement("header")
 
  headerContainerEl.innerHTML=`<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="./index.html">
    <img src="./img/logo.png" alt="" class="imagen">

    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
   
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="./portafolio.html">
        Portfolio
      </a>

      <a class="navbar-item" href="./servicios.html">
        Servicios
      </a>

        <a class="navbar-item" href="./contacto.html">
        Contacto
      </a>

     
      </div>
    </div>

    
  </div>
</nav>`

el.appendChild(headerContainerEl)

const activeBurger=()=>{
  

  
const navbarBurgers= document.querySelectorAll('.navbar-burger')

  navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {
        
   
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

};


activeBurger()


}