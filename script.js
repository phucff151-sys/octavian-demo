const slides = document.querySelectorAll('.hero-slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cartCount = document.querySelector('.cart-count');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const addToCartButtons = document.querySelectorAll('.add-cart');

let currentSlide = 0;
let cartItems = 0;

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide) => slide.classList.remove('active'));
  thumbnails.forEach((thumb) => thumb.classList.remove('active-thumb'));

  slides[currentSlide].classList.add('active');
  thumbnails[currentSlide].classList.add('active-thumb');
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

if (prevButton) {
  prevButton.addEventListener('click', () => changeSlide(-1));
}

if (nextButton) {
  nextButton.addEventListener('click', () => changeSlide(1));
}

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

setInterval(() => {
  changeSlide(1);
}, 5000);

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    productCards.forEach((card) => {
      const match = selected === 'all' || card.dataset.category === selected;
      card.classList.toggle('hidden', !match);
    });
  });
});

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {

    cartItems += 1;
    cartCount.textContent = cartItems;

    alert("Thêm sản phẩm thành công!");

    button.textContent = "Đã thêm";
    button.disabled = true;
    button.style.opacity = "0.8";

    setTimeout(() => {
      button.textContent = "Thêm";
      button.disabled = false;
      button.style.opacity = "1";
    }, 1200);

  });
});
const searchInput = document.querySelector("#searchInput");

if(searchInput){

searchInput.addEventListener("input",()=>{

    let keyword = searchInput.value.toLowerCase();

    productCards.forEach(card=>{

        let name = card
        .querySelector("h3")
        .textContent
        .toLowerCase();


        if(name.includes(keyword)){
            card.classList.remove("hidden");
        }
        else{
            card.classList.add("hidden");
        }

    });

});

}
const menuButton=document.querySelector(".menu-button");
const navLinks=document.querySelector(".nav-links");


if(menuButton){

menuButton.onclick=()=>{

navLinks.classList.toggle("show");

}

}
const animatedItems=document.querySelectorAll(
".product-card,.category-card,.review-card"
);


window.addEventListener("scroll",()=>{


animatedItems.forEach(item=>{


let position=item.getBoundingClientRect().top;


if(position < window.innerHeight-80){

item.classList.add("show-card");

}


});


});
const topBtn=document.querySelector("#topBtn");


window.addEventListener("scroll",()=>{


if(window.scrollY>400){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}


});


topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};
document.querySelectorAll(".buy-now").forEach(button => {
    button.onclick = function(){
        alert("Cảm ơn bạn đã mua hàng tại PhonePro!");
    };
});