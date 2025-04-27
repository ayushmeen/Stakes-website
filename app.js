
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('show');

}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5.5,
  spaceBetween: 20,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  touchEventsTarget: 'wrapper',
  breakpoints: {
    0: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3.2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4.2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
  }
});

document.getElementById('prev-slide').addEventListener('click', function () {
  swiper.slidePrev();  // Go to previous slide
});

// Add click event for right arrow
document.getElementById('next-slide').addEventListener('click', function () {
  swiper.slideNext();  // Go to next slide
});

var sliderWrapper = document.querySelector('.slider-wrapper');
var sliderItems = document.querySelectorAll('.slider-item');
var totalSliderItems = sliderItems.length;
var currentIndex = 0;

// Show 3 cards at a time
var cardsToShow = 3;

document.getElementById('prev-slide').addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex -= cardsToShow;
  } else {
    currentIndex = totalSliderItems - cardsToShow;
  }
  updateSliderPosition();
});

document.getElementById('next-slide').addEventListener('click', function () {
  if (currentIndex < totalSliderItems - cardsToShow) {
    currentIndex += cardsToShow;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
});

function updateSliderPosition() {
  sliderWrapper.style.transform = `translateX(-${(currentIndex * (100 / cardsToShow))}%)`;
}


function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const track = document.getElementById('carousel-track');
  const card = carousel.querySelector('.custom-card');

  const cardStyle = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth + parseFloat(cardStyle.marginRight);
  const visibleArea = carousel.offsetWidth;
  const totalScrollWidth = track.scrollWidth;
  const currentScroll = carousel.scrollLeft;

  const maxScroll = totalScrollWidth - visibleArea;

  let newScroll = currentScroll + (direction * cardWidth * 3);

  if (newScroll < 0) newScroll = 0;
  if (newScroll > maxScroll) newScroll = maxScroll;

  carousel.scrollTo({
    left: newScroll,
    behavior: 'smooth'
  });
}
const promoCarousel = document.querySelector('.promo-carousel');
const promoPrev = document.querySelector('.promo-prev');
const promoNext = document.querySelector('.promo-next');

promoPrev.addEventListener('click', () => {
  promoCarousel.scrollBy({
    left: -promoCarousel.clientWidth,
    behavior: 'smooth'
  });
});

promoNext.addEventListener('click', () => {
  promoCarousel.scrollBy({
    left: promoCarousel.clientWidth,
    behavior: 'smooth'
  });
});


const tabs = document.querySelectorAll('.casino-tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  question.addEventListener('click', () => {
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    question.setAttribute('aria-expanded', !isExpanded);

    item.classList.toggle('active');
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      }
    });
  });
});
