const NavBtn = document.querySelector(".nav-btn")
const NavBar = document.querySelector(".navbar")
const ContainerNav = document.querySelector(".nav-menu-container")

NavBtn.addEventListener("click", () => {
    NavBar.classList.toggle("active")
    ContainerNav.classList.toggle("active")
})

ContainerNav.addEventListener("click", () => {
    NavBar.classList.remove("active")
    ContainerNav.classList.remove("active")
})


// CLIENT REVIEW SLIDER

const x = document.querySelectorAll(".SldBtn")
const bx = document.getElementById('bx-slide')
const BxContainer = document.getElementById('review-content')
for (i = 0; i < x.length; i++)
    x[i].addEventListener("click", () => {
        const SlideWidth = bx.clientWidth
        BxContainer.scrollLeft += SlideWidth
    })


index = 1;
setInterval(() => {
    const btn1 = document.getElementById("RadBtn" + index).checked = true;

    index++
    const SlideWidth = bx.clientWidth
    BxContainer.scrollLeft += SlideWidth

    if (index > 4) {
        index = 1
        BxContainer.scrollLeft = 0
    }

}, 5000);



const sections = document.querySelectorAll('section[id]');
const navLi = document.querySelectorAll('.nav-content ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const secTop = section.offsetTop - 100;
        const secHeight = section.clientHeight;

        if (pageYOffset >= secTop) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active-link')
        if (li.classList.contains(current)) {
            li.classList.add('active-link')
        }
    })
    console.clear;
})


const moreText = document.getElementById("more-text")
const readbtn = document.getElementById('read-more')

readbtn.addEventListener('click', () => {
    moreText.style.display = "inline";
    readbtn.style.display = "none"
})


const subBtn = document.querySelectorAll(".buy")

for(i=0;i<subBtn.length;i++)
subBtn[i].addEventListener("click", () => alt())

function alt() {
    alert("Sorry, this button doesn't have actual function yet")
};
