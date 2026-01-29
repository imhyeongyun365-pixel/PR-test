const content = document.querySelectorAll(".tab .content-wrap .content")
const menuList = document.querySelectorAll(".tab .menu-list .menu-item")
let hmyI = 0

init(hmyI)

function init(x) {
  content[x].classList.add("active")
  menuList[x].classList.add("on")
}

function reset() {
  for(let i = 0; i<menuList.length; i++){
    content[i].classList.remove("active")
    menuList[i].classList.remove("on")
  }
}

menuList.forEach((menu, index) => {
  menu.addEventListener("click", (e) => {
    e.preventDefault()
    reset()
    init(index)
  })
})
 
 
 var swiper = new Swiper(".gallery", {
      pagination: {
        el: ".swiper-pagination",
      },
    navigation: {
        nextEl: ".gallery .swiper-button-next",
        prevEl: ".gallery .swiper-button-prev",
      },
    loop: true,
    // autoplay: true     
  });
