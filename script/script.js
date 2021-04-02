//Адаптивное меню
const menuIcon = document.querySelector('.menu-burger');
const menuHeader = document.querySelector('.header-menu');

if(menuIcon){    
    menuIcon.addEventListener('click', function (e){
        document.body.classList.toggle('lock'); //при открытом меню не скролится страничка
        menuIcon.classList.toggle('active');
        menuHeader.classList.toggle('active');
    });
    

};

//Прокрутка к нужному пункту меню при клике
 
const menuLinks = document.querySelectorAll('.menu-link[data-goto]');

if(menuLinks.length>0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if(menuIcon.classList.contains('active')){
                document.body.classList.remove('lock'); //при открытом меню не скролится страничка
                menuIcon.classList.remove('active');
                menuHeader.classList.remove('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault();
        }
    }
}






//Слайдер
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

console.log(dots);

const activeSlide = n =>{
    //console.log(n);
    for (slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n =>{
    for (dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () =>{
    if(index == slides.length - 1){
        index = 0;
        activeSlide(index);
        activeDot(index);
    }
    else{
        index++;
        activeSlide(index);
        activeDot(index);
    }
}

const prevSlide = () =>{
    if(index == 0){
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    }
    else{
        index--;
        activeSlide(index);
        activeDot(index);
    }
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);