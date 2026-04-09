const addCardsComponent=(el,params={})=>{
  const cardContainerEl=document.createElement("div")



  

    cardContainerEl.innerHTML=

    `<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src="${params.image}"
        alt="${params.title}"
      />
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      <h3 class="card-content__title">
        ${params.title}
      </h3>
      <p class="card-content-p">
        ${params.description}
      </p>
    </div>
  </div>
</div>`

el.appendChild(cardContainerEl)

  } 

const getCardsComponent=(tipo)=>{
    
   
 return fetch(  "https://cdn.contentful.com/spaces/gw7xapjd7oif/environments/master/entries?content_type=webComponents&access_token=gDjW6m-3i_vY7sUIgSIrW40KyqWcj8ghV0m7KxEKiwc" )
  .then(response => response.json())
   .then(data => {
  
    const assets = data.includes.Asset;


const imageMap = assets.reduce((acc, asset) => {
  acc[asset.sys.id] = "https:"+asset.fields.file.url;
  return acc;
}, {});

      return data.items
       .filter(item => item.metadata.tags[0]?.sys?.id === tipo)
      .map(item => { 
          const imagenId=item.fields.imagen.sys.id
          const urlImagen=imageMap[imagenId]
          const tagId=item.metadata.tags[0].sys.id
          // console.log(tagId===tipo)

          if(tagId===tipo){

              // console.log(item.metadata.tags[0].sys.id)
          return {
            title: item.fields.title,
            description: item.fields.description,
            image:urlImagen
          }}
        });
    })
.catch(error => console.error('Error:', error)); 
}



   

const buttonComponent=(el)=>{
   const buttonContainerEl=document.createElement("div")
    buttonContainerEl.innerHTML=`<button class="boton" type="submit">
        <span>Enviar</span>
        <img src="./img/componentes/send.png" alt="">
      </button>`
      el.appendChild(buttonContainerEl)
}
