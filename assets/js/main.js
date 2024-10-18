/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp) 

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    reset: false // Uncomment jika ingin animasi diulang
});

// Memanggil reveal untuk elemen .home__data
sr.reveal('.home__data, .card');
sr.reveal('.about__data', {origin: 'right'});
sr.reveal('.about__image', {origin: 'left'});
sr.reveal('.about__image', {origin: 'left'});


// scrollable

const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    //console.log("1.",scrollLeftValue);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
    //console.log("2.", scrollableWidth);

    btnLeft.style.display = scrollLeftValue > 0 ? "block": "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

    btnRight.addEventListener("click",()=> {
    tabMenu.scrollLeft += 150;                                                                                                                                                                                                                                                                                              
    //IconVisibility();
    setTimeout(() => IconVisibility(), 50)
    });

    btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    //IconVisibility();
    setTimeout(() => IconVisibility(), 50)
    });

    window.onload = function(){
        btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
        btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
    }
    
    window.onresize = function(){
        btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
        btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

        let scrollLeftValue = Math.round(tabMenu.scrollLeft);

        btnLeft.style.display = scrollLeftValue > 0 ? "block": "none";
    }

// Javascript to make the tab navigation dragable
let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    IconVisibility();
    tabMenu.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
activeDrag = false;
tabMenu.classList.remove("dragging");
});

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
});

// javascript to view tab contents on click tab buttons
const tabs = document.querySelectorAll(".tab");
const tabBtns= document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick) {
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });

    tabs.forEach((tab) => {
        tab.classList.remove("active");
        // Untuk menunggu efek transisi sebelum menghapus display
        tab.addEventListener('transitionend', () => {
            if (!tab.classList.contains("active")) {
                tab.style.display = "none"; // Sembunyikan setelah transisi
            }
        });
    });

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].style.display = "block"; // Tampilkan tab baru
    setTimeout(() => {
        tabs[tabBtnClick].classList.add("active"); // Tambahkan kelas aktif setelah ditampilkan
    }, 10); // Sedikit jeda untuk memastikan tab ditampilkan sebelum kelas aktif ditambahkan
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tab_Nav(i);
    });
});

