var codingProjects = document.querySelectorAll(".project");

  codingProjects.forEach((project, index) => {
    project.dataset.aos = "fade-down";
    project.dataset.aosDuration = 1500;
    project.dataset.aosDelay = index * 300;
  })

AOS.init({
  once: true
});