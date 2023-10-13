const programs = document.querySelector('.programs')
const menuList = document.querySelector('.menuList')
const online = document.querySelector('.online')
const menuList2 = document.querySelector('.menuList2')


programs.addEventListener('click', () => {
    menuList.classList.toggle('show')
})

online.addEventListener('click', () => {
    menuList2.classList.toggle('show')
})