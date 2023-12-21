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

const projectArr = {
  firstProject: { details: "상세보기 내용 1", link: "https://docs.google.com/document/d/1NK41BjPFFus_X3NFZlAe5puN-lUnAcHbjJJk7o7Mj60/edit" },
  secondProject: { details: "상세보기 내용 2", link: "https://docs.google.com/document/d/1U_xrtESaLZvT3FaVmaqwfGuDaZCo-SU8d053pXDLN8M/edit" },
  thirdProject: { details: "상세보기 내용 3", link: "https://docs.google.com/document/d/1yYxdds-rSlIL-RifdNd2ZblgxC1K81KUuPsKn8SRc2I/edit" },
};

[...document.getElementsByClassName("project-info")].forEach((i) => {
  i.onclick = (e) => {
    modalElem.style.display = "flex";
    const projectName = e.target.dataset.name;
    const projectDetails = projectArr[projectName].details;
    const projectLink = projectArr[projectName].link;

    const detailsElement = modalElem.getElementsByClassName("details")[0];
    detailsElement.innerHTML = projectDetails;

    // Add link if it exists
    if (projectLink) {
      const linkElement = document.createElement("a");
      linkElement.href = projectLink;
      linkElement.textContent = "문서보기";
      detailsElement.appendChild(document.createElement("br")); // Add line break
      detailsElement.appendChild(linkElement);
    }
  };
});
