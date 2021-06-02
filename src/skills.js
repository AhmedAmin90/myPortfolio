// Languages
const arrowR1 = document.querySelector('#arrow-right-1')
const arrowD1 = document.querySelector('#arrow-down-1')
const langTab = document.querySelector('#languages-tab')
const langSkills = document.querySelector('#skills-lang')

langTab.addEventListener('click' , ()=> {
    arrowD1.classList.toggle('hide')
    arrowR1.classList.toggle('hide')
    langSkills.classList.toggle('hide')
    langSkills.classList.toggle('hidden-tab')
})


// Skills 
const arrowR2 = document.querySelector('#arrow-right-2')
const arrowD2 = document.querySelector('#arrow-down-2')
const skillsTab = document.querySelector('#skills-tab')
const skillsSkills = document.querySelector('#skills-skills')

skillsTab.addEventListener('click' , ()=> {
    arrowD2.classList.toggle('hide')
    arrowR2.classList.toggle('hide')
    skillsSkills.classList.toggle('hide')
    skillsSkills.classList.toggle('hidden-tab')
})


// Tools:
const arrowR3 = document.querySelector('#arrow-right-3')
const arrowD3 = document.querySelector('#arrow-down-3')
const toolsTab = document.querySelector('#tools-tab')
const toolsSkills = document.querySelector('#skills-tools')

toolsTab.addEventListener('click' , ()=> {
    arrowD3.classList.toggle('hide')
    arrowR3.classList.toggle('hide')
    toolsSkills.classList.toggle('hide')
    toolsSkills.classList.toggle('hidden-tab')
})