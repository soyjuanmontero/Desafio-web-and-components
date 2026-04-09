function main(){
const headerSectionel=document.querySelector('.container__h-m__header')
headerComponent(headerSectionel)


const cardSectionEl=document.querySelector('.container__card')
const tagServices="tipoServicios"
const tagProyect="tipoProyecto"

getCardsComponent(tagServices).then((cards)=>{
    for (const e of cards) {
        addCardsComponent(cardSectionEl,e)
    }

})

const footerSectionEl=document.querySelector ('.container__footer')
footerComponent(footerSectionEl)

}

main()