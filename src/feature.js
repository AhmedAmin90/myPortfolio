// First Project
const btnFeature1 = document.querySelector('#details-feature-1')
const projFeature1 = document.querySelector('#feature-first')
const closeProFeature1 = document.querySelector('#feature-first strong')


btnFeature1.addEventListener('click', ()=>{
    projFeature1.classList.toggle('hide')
})

closeProFeature1.addEventListener('click' , ()=> {
    projFeature1.classList.toggle('hide')
})


// Second Project
const btnFeature2 = document.querySelector('#details-feature-2')
const projFeature2 = document.querySelector('#feature-two')
const closeProFeature2 = document.querySelector('#feature-two strong')


btnFeature2.addEventListener('click', ()=>{
    projFeature2.classList.toggle('hide')
})

closeProFeature2.addEventListener('click' , ()=> {
    projFeature2.classList.toggle('hide')
})


// Third project
const btnFeature3 = document.querySelector('#details-feature-3')
const projFeature3 = document.querySelector('#feature-three')
const closeProFeature3 = document.querySelector('#feature-three strong')


btnFeature3.addEventListener('click', ()=>{
    projFeature3.classList.toggle('hide')
})

closeProFeature3.addEventListener('click' , ()=> {
    projFeature3.classList.toggle('hide')
})

