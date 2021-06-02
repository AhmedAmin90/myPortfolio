const btnFeature1 = document.querySelector('#details-feature-1')
const projFeature1 = document.querySelector('#feature-first')
const closeProFeature1 = document.querySelector('#feature-first strong')


btnFeature1.addEventListener('click', ()=>{
    projFeature1.classList.toggle('hide')
})

closeProFeature1.addEventListener('click' , ()=> {
    projFeature1.classList.toggle('hide')
})