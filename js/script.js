AOS.init();

const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const popupSlide = document.querySelector('#popupSlide');
const sliderItem = document.querySelectorAll('.our_requirements_content_item');
const sliderPhoto = document.querySelector('.our_requirements_img');
const body = document.body;
const casualLogo = document.querySelector('.logo-white');
const colorLogo = document.querySelector('.logo-color');

burger.addEventListener('click', burgerHandler);
popup.addEventListener('click', (e) => {
  burgerHandler(e);
});

sliderItem.forEach((e) => {
  e.addEventListener('click', () => {
    setImage(e, sliderItem);
  });
});

function burgerHandler(e) {
  if (popup.classList.contains('open')) {
    popup.classList.add('close');
    body.classList.remove('noscroll');
    popupSlide.classList.add('slideout');
    casualLogo.classList.remove('logo-hide');
    colorLogo.classList.add('logo-hide');
    setTimeout(() => {
      casualLogo.classList.remove('logo-hide');
      colorLogo.classList.add('logo-hide');
      // colorLogo.classList.remove('logo-hide');
      // casualLogo.classList.add('logo-hide');
    }, 270);
    setTimeout(() => {
      popup.classList.remove('close');
      popup.classList.remove('open');
      popupSlide.classList.remove('slideout');
      popupSlide.classList.remove('slidein');
    }, 270);
  } else {
    body.classList.add('noscroll');
    popup.classList.add('open');
    popupSlide.classList.add('slidein');
    setTimeout(() => {
      //   casualLogo.classList.remove('logo-hide');
      // colorLogo.classList.add('logo-hide');
      colorLogo.classList.remove('logo-hide');
      casualLogo.classList.add('logo-hide');
    }, 270);
  }
  burger.classList.toggle('active');
}

function scrollToPrice() {
  document.querySelector('#price').scrollIntoView(true);
}
function scrollToAbout() {
  document.querySelector('#about').scrollIntoView(true);
}
function scrollToBenefits() {
  document.querySelector('#benefits').scrollIntoView(true);
}
function scrollToHow() {
  document.querySelector('#how').scrollIntoView(true);
}
function scrollToBefore() {
  document.querySelector('#before').scrollIntoView(true);
}
function scrollToSub() {
  document.querySelector('#sub').scrollIntoView(true);
}
let copiedText = document.querySelectorAll('#trythis');
copiedText.forEach((elem) => elem.addEventListener('click', () => copyText(elem)));
console.log(colorLogo);

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 50) {
    $('.header').addClass('good');
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $('.header').removeClass('good');
  }
});
//

const openBut = document.querySelector('.button_main');
const formSpace = document.querySelector('.bg_form');
const mainWrap = document.querySelector('.main_picture');
const mainForm = document.querySelector('.forma');
const pagemainTitle = document.querySelector('.hide_title');
const pagesubTitle = document.querySelector('.h1item2');
const frstSub = document.querySelector('.hide_subtitle');
const secondSub = document.querySelector('.secondSub');
const mainTitle = document.querySelector('.h1item1');
const mainSub = document.querySelector('.main_text_subtext');

if (window.innerWidth > 1150) {
  openBut.addEventListener('click', () => {
    formSpace.classList.add('openSpace');
    pagemainTitle.classList.add('hide_h1title');
    pagesubTitle.classList.add('show_h2title');
    frstSub.classList.add('hide_h1title');
    secondSub.classList.add('show_h2title');
    mainSub.classList.add('translate_item');
    openBut.classList.add('secondSub');
    setTimeout(() => {
      pagesubTitle.classList.add('make_opacity_normal');
      secondSub.classList.add('make_opacity_normal');
    }, 10);
  });

  mainWrap.addEventListener('click', (e) => {
    console.log(e.target);
    if (
      e.target.classList.contains('main_picture_content_wrapper') ||
      e.target.classList.contains('h1item') ||
      e.target.classList.contains('main_text_subtext') ||
      e.target.classList.contains('header') ||
      e.target.classList.contains('main_text_wrapper') ||
      e.target.classList.contains('cross')
    ) {
      pagesubTitle.classList.remove('make_opacity_normal');
      secondSub.classList.remove('make_opacity_normal');
      frstSub.classList.remove('hide_h1title');
      pagemainTitle.classList.remove('hide_h1title');
      formSpace.classList.remove('openSpace');

      pagesubTitle.classList.remove('show_h2title');
      secondSub.classList.remove('show_h2title');
      mainSub.classList.remove('translate_item');
      openBut.classList.remove('secondSub');
    }
  });
} else {
  const caption = document.querySelector('.wrap_form_mob');
  openBut.addEventListener('click', () => {
    caption.classList.add('mob_form_appear');
    setTimeout(() => {
      caption.classList.add('mob_form_opacity');
    }, 10);
  });
  caption.addEventListener('click', (e) => {
    if (e.target.classList.contains('main_form_wrapper') || e.target.classList.contains('cross')) {
      caption.classList.remove('mob_form_opacity');
      setTimeout(() => {
        caption.classList.remove('mob_form_appear');
      }, 500);
    }
  });
}
