const scrollY = function () {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}

const menu = document.querySelector('.menu')
const topMenu = menu.getBoundingClientRect().top

onscrollMenu = function () {
    if ( scrollY() > topMenu) { 
        menu.classList.add('menu-collant')
        document.querySelector('main').style.paddingTop='70px'
    } else {
        menu.classList.remove('menu-collant')
        document.querySelector('main').style.paddingTop='20px'
    }
}
window.addEventListener('scroll', onscrollMenu) 


const mainAside = document.querySelector('.main-aside-presentation')
const mainSideBar = document.querySelector('.main-sidebar')
const mainAsideContent = document.querySelector('.main-aside-content')

onscrollSide = function () {
    const scrollValue = scrollY() - topMenu

    if ( scrollY() > topMenu) {   
        mainAside.style.position='absolute'
        mainAside.style.top = scrollValue + 'px'
        mainAside.style.bottom = 'auto'

        mainAsideContent.style.position='absolute'
        mainAsideContent.style.top = mainAside.getBoundingClientRect().height + 'px'

    } else {
        mainAside.style.position='auto'
        mainAside.style.top = 'auto'
        mainAside.style.bottom = 'auto'  
    }

    if (scrollValue + mainAside.getBoundingClientRect().height > mainSideBar.getBoundingClientRect().height) {
        mainAside.style.top = 'auto'
        mainAside.style.bottom = '0'
    }
}
window.addEventListener('scroll', onscrollSide) 











//     var scrollY = function () {
//     var supportPageOffset = window.pageXOffset !== undefined;
//     var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//     return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
// }

// var menu = document.querySelector('.menu')
// var mainaside = document.querySelector('.main-aside-presentation')
// var mainsidebar = document.querySelector('.main-sidebar')


// var topmenu = menu.getBoundingClientRect().top + scrollY()
// var topaside = mainaside.getBoundingClientRect().top + scrollY()
// var bottomside = mainsidebar.getBoundingClientRect().bottom + scrollY() - mainaside.scrollHeight - mainsidebar.getBoundingClientRect().y

// onscrollmenu = function () {
//     if ( scrollY() > topmenu) {   
//         menu.classList.add('menu-collant')
//     } else {
//         menu.classList.remove('menu-collant')
//     }
// }

// onscrollside = function () {
//     if ( scrollY() > topaside  && scrollY() < bottomside ) {   
//         mainaside.classList.add('aside-collant')
//     } else {
//         mainaside.classList.remove('aside-collant')
//     }
// }
//     window.addEventListener('scroll', onscrollmenu) 
//     window.addEventListener('scroll', onscrollside) 


