const navLinks = document.querySelector(".links");
const barButton = document.querySelector(".bars");


barButton.addEventListener("click", function(e){
    // console.log(e);
    navLinks.classList.toggle("show-links");
});
