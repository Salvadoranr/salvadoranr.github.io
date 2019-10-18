const menu = document.getElementsByClassName('menu')[0];
let options = document.getElementsByClassName('header__span');
menu.addEventListener('click',function(){
    addClass(options.length);
});

for(let i = 0;i< options.length;i++){
    options[i].addEventListener('click',function(){
        removeSelected(options)
        this.classList.add('selected')
    })
}






function removeSelected(array){
    for(let i = 0;i< array.length;i++){
        array[i].classList.remove('selected')
    }
}
function addClass(repeat){
    if(repeat){
        options[repeat-1].classList.toggle('header--show');
        repeat--
        setTimeout(() => {
            addClass(repeat)
        }, 500);
    }
}
