const modalElem = document.getElementById("modal");

modalElem.onwheel = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

modalElem.onclick = document.getElementById("close-btn").onclick = () => {
  modalElem.style.display = "";
};

document.getElementById("modal-box").onclick = (e) => {
  e.stopPropagation();
};



[...document.getElementsByClassName("project-link")].forEach((button) => {
  button.onclick = (e) => {
    const projectLink = e.target.dataset.link;
    window.open(projectLink, "_blank");
  };
});

[...document.getElementsByClassName("project-doc")].forEach((button) => {
  button.onclick = (e) => {
    const projectLink = e.target.dataset.link;
    window.open(projectLink, "_blank");
  };
});