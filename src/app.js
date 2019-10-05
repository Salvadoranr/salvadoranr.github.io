document.querySelector('.menu__btn').addEventListener('click', ()=>{
    const header= document.querySelector('.header')
    const headerMenu= document.querySelector('.header__menu')
  
    header.classList.toggle('header--desplegado')
    headerMenu.classList.toggle('header__menu--opacity')
  })
  