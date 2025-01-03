var modal = document.querySelector(".modal-container");
var button = document.querySelector("button");
var btnClose = document.querySelector("span");

if (button) {
    button.addEventListener("click", function() {
      modal.style.visibility = "visible";
    });
}

if (btnClose) {
    btnClose.addEventListener("click", function() {
       modal.style.visibility = "hidden";
    });
}

var btnSubmit = document.querySelector('.submit');
var modal = document.querySelector('.modal-container');

if (btnSubmit) {
  btnSubmit.addEventListener('click', function () {
    modal.classList.add('show');

    const next = document.querySelector('.next');
    next.setAttribute('value', 'https://kevinthecoder.netlify.app/contact.html');
  });
}

var codingProjects = document.querySelectorAll(".project");

  codingProjects.forEach((project, index) => {
    project.dataset.aos = "fade-down";
    project.dataset.aosDuration = 1500;
    project.dataset.aosDelay = index * 300;
  })

AOS.init({
  once: true
});