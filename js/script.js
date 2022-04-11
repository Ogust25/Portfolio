/* Form */

const btn = document.querySelector("#btnValider")
const inputNom = document.querySelector("#inputNom")
const inputEmail = document.querySelector("#inputEmail")
const inputMsg = document.querySelector("#inputMsg")
const form = document.querySelector('form')
const regleNomPrenom = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+$/;
const regleEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const regleMessage = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ',;()-]+$/;

form.addEventListener('submit', function(e){
    e.preventDefault()
    let formData = new FormData(form)
    let url = '../php/form.php';
    fetch(url,{
        method: 'POST',
        body: formData
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        document.querySelector('#txtValider').innerHTML = data.validation;
        return form.reset()
    })
})

btn.addEventListener('click', function(){
    let resultatNom = regleNomPrenom.test(inputNom.value)
    let resultatEmail = regleEmail.test(inputEmail.value)

    if((resultatNom == true)&&(resultatEmail == true)){
        document.querySelector('#txtValider').classList.add("visible")
        document.querySelector('#txtValider').classList.remove("invisible")
        document.querySelector('#nomError').classList.add("invisible")
        document.querySelector('#nomError').classList.remove("visible")
        document.querySelector('#emailError').classList.add("invisible")
        document.querySelector('#emailError').classList.remove("visible")
    }
    if(resultatNom == false){
        document.querySelector('#nomError').classList.add("visible")
        document.querySelector('#nomError').classList.remove("invisible")
    }
    if(resultatEmail == false){
        document.querySelector('#emailError').classList.add("visible")
        document.querySelector('#emailError').classList.remove("invisible")
    }
})


/* Spy Scroll */

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
    let current = "";

    if(window.scrollY >= 1000 ){
        document.querySelector('nav').classList.add("stickyCustom")
    }else{
        document.querySelector('nav').classList.remove("stickyCustom")
    }

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};


/* Event Modal */

const closeModal = document.querySelectorAll(".closeModal");
closeModal.forEach(e => {
    let closeTarget = e.dataset.target;
    e.addEventListener("click", function(){
        document.querySelector('#'+closeTarget).style.display = "none";
    })
});

/* const window = document.querySelector("window");
const modal = document.querySelectorAll('#modal');
window.forEach((e) => {
    e.addEventListener("click",function(){
        if (e.target == modal) {
          modal.style.display = "none";
        }
    })
}) */


/* PROJET */
/* Café */
const shuffleModal = document.querySelector("#shuffleModal");
const shuffleBtnModal = document.querySelector("#shuffleBtnModal");
shuffleBtnModal.addEventListener("click", function(){
    shuffleModal.style.display = "flex";
})
/* Devfinder */
const devfinderModal = document.querySelector("#devfinderModal");
const devfinderBtnModal = document.querySelector("#devfinderBtnModal");
devfinderBtnModal.addEventListener("click", function(){
    devfinderModal.style.display = "flex";
})
/* Widget */
const widgetModal = document.querySelector("#widgetModal");
const widgetBtnModal = document.querySelector("#widgetBtnModal");
widgetBtnModal.addEventListener("click", function(){
    widgetModal.style.display = "flex";
})

/* LAB */
/* Order Card */
const orderModal = document.querySelector("#orderModal");
const orderBtnModal = document.querySelector("#orderBtnModal");
orderBtnModal.addEventListener("click", function(){
    orderModal.style.display = "flex";
})
/* Formulaire */
const formModal = document.querySelector("#formModal");
const formBtnModal = document.querySelector("#formBtnModal");
formBtnModal.addEventListener("click", function(){
    formModal.style.display = "flex";
})
/* Néomorphisme */
const neoModal = document.querySelector("#neoModal");
const neoBtnModal = document.querySelector("#neoBtnModal");
neoBtnModal.addEventListener("click", function(){
    neoModal.style.display = "flex";
})

/* Menu Burger */

const modalBurger = document.querySelector('#modalBurger')
const btnBurger = document.querySelector("#btnBurger");
const closeBurger = document.querySelectorAll('.closeBurger');

btnBurger.addEventListener("click", function() {
    modalBurger.style.display = "flex";
})

closeBurger.forEach((e) => {
    e.addEventListener("click", function() {
        modalBurger.style.display = "none";
    })
});



/* Api Medium */

/* let apiCall = function(){
    let url = `https://api.medium.com/v1`;
    fetch(url)
    .then((response) =>
    response.json().then((data) => {
        console.log(data);
    })
    )  
}
apiCall() */