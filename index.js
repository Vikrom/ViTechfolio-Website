
//              ===============  Creating a portfolio tabbed component  =============


const heroSection = document.querySelector(".section-hero");

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

if (!p_btn_clicked.classList.contains("p-btn")) return;

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    

    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    // console.log(img_active);

    p_img_elem.forEach((curElem) =>
        curElem.classList.add("p-image-not-active")
    );

    img_active.forEach((curElem) =>
        curElem.classList.remove(`p-image-not-active`)
    );
});


//              ===============     Swipper section     ================

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const myJsmedia = (widthSize) =>{
    if(widthSize.matches){
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
    });
}else{
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
});
}
};
const widthSize = window.matchMedia("(max-width:560px)");
widthSize.addEventListener("change",myJsmedia);

myJsmedia(widthSize);


//              ------------------    Scroll to top    ---------------------

const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top" ></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);




//  ==================    Responsive Sticky navbar component    ================== 

const observer = new IntersectionObserver((entries) => {
    const ent = entries[0];
    // console.log(ent);
    !ent.isIntersecting
        ? document.body.classList.add("sticky")
        : document.body.classList.remove("sticky");
},
    {
        root: null,
        threshold: 0,
    }
);
observer.observe(heroSection);



//     ================  Responsive navbar   ==============  

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
    headerElem.classList.toggle("active");
});



