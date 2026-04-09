const footerComponent=(el)=>{
  const footerContainerEl=document.createElement("footer")
  
  footerContainerEl.innerHTML=`   <div class="footer__content">
      <div class="footer__logo">
         <img src="./img/logo.png" alt="" class="logo__imagen">
      </div>
      <div class="footer__links-info">
        <ul class="sections__list">
          <li class="list__li">
            <a href="./index.html" class="list__li-a">
            <div class="li__cont-img">
              <img src="./img/footer-img/home.png" alt="">

            </div>
            <h3 class="li__title">Home</h3>
            </a>
          </li>
           <li class="list__li">
            <a href="servicios.html" class="list__li-a">
            <div class="li__cont-img">
              <img src="./img/footer-img/user.png" alt="">

            </div>
            <h3 class="li__title">Servicios</h3>
            </a>
          </li>
           <li class="list__li">
            <a href="contacto.html" class="list__li-a">
            <div class="li__cont-img">
              <img src="./img/footer-img/contact.png" alt="">

            </div>
            <h3 class="li__title">Contacto</h3>
            </a>
          </li>
         
        </ul>
      </div>
      <div class="footer__social-media">
        <div class="social-media">
          <a href="https://www.linkedin.com/in/juan-manuel-montero-cede%C3%B1o/">
        
          <img src="./img/footer-img/Frame 24.png" alt="" class="social-media__img">
            </a>
          
        </div>
        <div class="social-media">
          <a href="https://github.com/soyjuanmontero">
          <img src="./img/footer-img/Frame 26.png" alt="" class="social-media__img">
            </a>
          
        </div>
        
      </div>
      <div class="link-apx">
        <a href="https://apx.school">©2026 - https://apx.school</a>
      </div>
    </div>`

el.appendChild(footerContainerEl)
}