const featureProjectOne = document.querySelector('.box-1')
const btn1 = document.querySelector('.box-1 .hidden-btn ')
const featureProjectTwo = document.querySelector('.box-2')
const btn2 = document.querySelector('.box-2 .hidden-btn ')
const featureProjectThree = document.querySelector('.box-3')
const btn3 = document.querySelector('.box-3 .hidden-btn ')


featureProjectOne.addEventListener('mouseover', ()=> {
    btn1.classList.remove('hide');
})
featureProjectOne.addEventListener('mouseleave', ()=> {
    btn1.classList.add('hide')
})


featureProjectTwo.addEventListener('mouseover', ()=> {
    btn2.classList.remove('hide');
})
featureProjectTwo.addEventListener('mouseleave', ()=> {
    btn2.classList.add('hide')
})


featureProjectThree.addEventListener('mouseover', ()=> {
    btn3.classList.remove('hide')
})
featureProjectThree.addEventListener('mouseleave', ()=> {
    btn3.classList.add('hide')
})