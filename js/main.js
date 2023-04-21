//top banner

const TOP_BANNER = document.querySelector('#header .topBanner');
const TOP_BANNER_BTN = document.querySelector('#header i');

const MAIN_SLIDE_NAV = document.querySelector('#mainVisual .slide_nav');
const MAIN_SLIDE_NAV_LI = document.querySelectorAll('#mainVisual .slide_nav>li');

const MAIN_SLIDE_NUM = document.querySelector('#mainVisual .num');

const TOP_BANNER_HANDLER = () => {
    TOP_BANNER.classList.add('on');
}

TOP_BANNER_BTN.addEventListener('click', TOP_BANNER_HANDLER);

const TOP_BANNER_SLIDE_OPTION = {
    loop: true,
    pagination: {
        el: ".dots",
        clickable: true,
    },
}

const TOP_BANNER_SLIDE = new Swiper('.topBanner', TOP_BANNER_SLIDE_OPTION);

//gnb

const HD_WRAP = document.querySelector('#header .hdWap');

const HD_WRAP_HANDLER = () => {
    let SCT = window.scrollY;
    SCT > 0
        ? HD_WRAP.classList.add('on')
        : HD_WRAP.classList.remove('on');
}

window.addEventListener('scroll', HD_WRAP_HANDLER);

const MAIN_VISUAL_SLIDE_OPTION = {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // navigation: {
    //     nextEl: "#mainVisual .arrows>div:nth-child(1)",
    //     prevEl: "#mainVisual .arrows>div:nth-child(2)",
    // },
    on: {
        slideChangeTransitionStart: function () {
            console.log(this, this.realIndex, MAIN_SLIDE_NAV_LI);
            let idx = this.realIndex;
            let total = this.slides.length;
            MAIN_SLIDE_NAV_LI.forEach(it => it.classList.remove('on'));
            MAIN_SLIDE_NAV_LI[idx].classList.add('on');
            MAIN_SLIDE_NUM.innerHTML = `<strong>${idx < 9 ? 0 : ''}${idx + 1}</strong> / <span>${total - 2}</span>`;
        }
    }
}

const MAIN_VISUAL_SLIDE = new Swiper('.mainSlide', MAIN_VISUAL_SLIDE_OPTION);

const MAIN_VISUAL_SLIDE_ARROWS = document.querySelectorAll('#mainVisual .arrows>div');
console.log(MAIN_VISUAL_SLIDE_ARROWS[0]);

MAIN_VISUAL_SLIDE_ARROWS[0].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slidePrev();
});
MAIN_VISUAL_SLIDE_ARROWS[1].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slideNext();
});

//이벤트의 위임... e.target --> 

const MAIN_SLIDE_NAV_HANDLER = e => {
    e.preventDefault();
    //console.log(e.target);
    // for (let i = 0; i < MAIN_SLIDE_NAV_LI.length; i++) {
    //     MAIN_SLIDE_NAV_LI[i].classList.remove('on')
    // }
    const TG = e.target.parentElement;
    //console.log(MAIN_SLIDE_NAV_LI, [...MAIN_SLIDE_NAV_LI]);
    const I = [...MAIN_SLIDE_NAV_LI].indexOf(TG);
    //console.log(I)
    //$(this).parent().index();
    //TG.classList.add('on');
    MAIN_VISUAL_SLIDE.slideTo(I + 1);
}


MAIN_SLIDE_NAV.addEventListener('click', MAIN_SLIDE_NAV_HANDLER)






const PF_LEFT_SLIDE_OPTION = {
    // loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    initialSlide: 0,
    navigation: {
        nextEl: "#mainProtfolio .arrows li:nth-child(2)",
        prevEl: "#mainProtfolio .arrows li:nth-child(1)",
    },
    // watchSlidesProgress: true,



    // autoplay: {
    //     delay: 3000,
    // },
}

const PF_LEFT_SLIDE = new Swiper('.pf_left_slide', PF_LEFT_SLIDE_OPTION)




const PF_RIGHT_SLIDE_OPTION = {
    // loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    touchRaito: 0.2,
    initialSlide: 1,


    // thumbs: {
    //     swiper: PF_LEFT_SLIDE,
    // },


    // autoplay: {
    //     delay: 3000,
    // },
}

const PF_RIGHT_SLIDE = new Swiper('.pf_right_slide', PF_RIGHT_SLIDE_OPTION);

PF_LEFT_SLIDE.controller.control = PF_RIGHT_SLIDE;
PF_RIGHT_SLIDE.controller.control = PF_LEFT_SLIDE;













const MS_CONTENT = document.querySelectorAll('#mainSolution .Ms_content .content');
const MS_NUM = document.querySelector('#mainSolution .num');




const MS_SLIDE_OPTION = {
    loop: true,
    spaceBetween: 100,
    centeredSlides: true,
    slidesPerView: "auto",
    slideActiveClass: "on",
    on: {
        slideChangeTransitionStart: function () {
            console.log(this.realIndex, this.slides.length);
            let idx = this.realIndex;
            let total = MS_CONTENT.length;

            // for (let i = 0; i < MS_CONTENT.length; i++) {
            //     MS_CONTENT[i].classList.remove('on')
            // }

            MS_NUM.innerHTML = `<strong>${idx < 10 ? '0' : ''}${idx + 1}</strong> / <span>${total < 10 ? '0' : ''}${total}</span>`
            MS_CONTENT.forEach(it => it.classList.remove('on'))
            MS_CONTENT[idx].classList.add('on')
        }
    },
    navigation: {
        nextEl: "#mainSolution .arrows li:nth-child(2)",
        prevEl: "#mainSolution .arrows li:nth-child(1)",
    },
    pagination: {
        el: '#mainSolution .dots',
        clickable: true,
    },
}

const MS_SLIDE = new Swiper('.Ms_slide', MS_SLIDE_OPTION);

//바닐라 자바스크립트로 youtube 쓰기...
let player;
const Y_OPTION = {
    height: '100%',
    width: '100%',
    videoId: 'raw3Nu0_mBQ',
    playerVars: { 'autoplay': 0, 'controls': 0 },
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('main_movie01', Y_OPTION);
};


// pp.onclick = function () {
//     console.log('btn')
// }

// const Y_PLAY = document.querySelector('#pp');
// const Y_PAUSE = document.querySelector('#pp2');
// const Y_STOP_VIDEO = () => {
//     console.log('btn');
//     player.playVideo();
// }
// const Y_PAUSE_VIDEO = () => {
//     console.log('pause');
//     player.pauseVideo();
// }

// Y_PLAY.addEventListener('click', Y_STOP_VIDEO);
// Y_PAUSE.addEventListener('click', Y_PAUSE_VIDEO);



const V_BTN = document.querySelector('.video_btn');
let SW = true;
const V_SWITCH = e => {
    const tg = e.target;
    tg.classList.toggle('on')
    SW
        ? player.playVideo()
        : player.pauseVideo()
    SW = !SW;
    // V_BTN.classList.contains('on')
    //     ? player.playVideo()
    //     : player.pauseVideo()

}


V_BTN.addEventListener('click', V_SWITCH);

// let SW : 전역변수, 전역변수를 지역변수로 가둬서 쓰는 방법이 없을까??


const MOVIE_UL = document.querySelector('#mainMovie .link');
const UL_CSS = `
display : flex;
gap : 30px;
width : 600px;
margin : 0 auto;
text-align: center;
`
MOVIE_UL.style.cssText = UL_CSS;
//[...MOVIE_UL.children][0].classList.add('on')


const MOVIE_LINK = [
    { title: "IT Technology", desc: "IT 기술이 창조하는 승강기 스마트 시스템" },
    { title: "Green Technology", desc: "지구환경을 생각하는 녹색기술" }
];



// for (let i = 0; i < MOVIE_LINK.length; i++) {
//     MOVIE_UL.innerHTML += `<li>
// <strong>${MOVIE_LINK[i].title}</strong>
// <span>${MOVIE_LINK[i].desc}</span>
// </li>`;
// };


for (it of MOVIE_LINK) {
    MOVIE_UL.innerHTML += `<li>
<strong>${it.title}</strong>
<span>${it.desc}</span>
</li>`;
}

const STRONG = document.querySelectorAll('#mainMovie .link strong');
for (it of STRONG) {
    it.style.display = 'block'
}

console.log([...MOVIE_UL.children][0]);
[...MOVIE_UL.children][0].classList.add('on');

const MOVIE_UL_TOGGLE = e => {
    let idx = [...MOVIE_UL.children].indexOf(e.target.parentElement)
    console.log(idx)

    //전체 li에서 class를 떼고 클릭한 거에 class 붙이기
    for (it of [...MOVIE_UL.children]) {
        it.classList.remove('on');
        [...MOVIE_UL.children][idx].classList.add('on')
    }
}

MOVIE_UL.addEventListener('click', MOVIE_UL_TOGGLE)



// footer .t_right li a click 일단 a자체의 이벤트를 막고 전체li에서는 on을 뗀다.
// 내 위 부모에다가 class on을 붙인다.

const T_RIGHT = document.querySelectorAll('#footer .t_right li>a');
const T_RIGHT_BTN = document.querySelectorAll('#footer .t_right button');

T_RIGHT_BTN.forEach(it => {
    it.addEventListener('click', () => {
        it.closest('li').classList.remove('on')
    })
})

const R_TAB = (it, idx) => {
    // T_RIGHT.forEach(it => it.classList.remove('on'));
    // it.classList.add('on');
    T_RIGHT.forEach(it =>
        it.parentElement.classList.remove('on'))
    it.parentElement.classList.add('on');
}






T_RIGHT.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        R_TAB(it, idx);
    });
});



const TOGGLE_TOP_BTN = () => {
    let SCT = window.scrollY;
    console.log(SCT)
    SCT > 500
        ? TOTOP.classList.add('on')
        : TOTOP.classList.remove('on')
}

window.addEventListener('scroll', TOGGLE_TOP_BTN)

const TOTOP = document.querySelector('.toTop');
const WINDOW_TOP = () => {
    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    // });

    gsap.to(window, {
        duration: 0.5,
        scrollTo: 0,
    })
};

TOTOP.addEventListener('click', WINDOW_TOP);
