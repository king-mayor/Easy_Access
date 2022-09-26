const toggleBtn = document.querySelector('.nav3');
const links = document.querySelector('.nav2');
toggleBtn.addEventListener("click", function () {
    if(links.classList.contains('active')){
        links.classList.remove('active');
    }else {
        links.classList.add('active');
    }
})
window.onscroll("scroll", function() {
    links.classList.remove('active');
})