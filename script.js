// Bấm vào button
var productBtnList = document.getElementsByClassName("product-btn");

for (let btn of productBtnList) {
  btn.addEventListener("click", (e) => {
    for (i of productBtnList) {
      i.classList.remove("active");
    }
    btn.classList.add("active");
  });
}

// Bấm hiện menu
var btnOpen = document.getElementsByClassName("menu-open");
var sidebar = document.getElementsByClassName("sidebar");
var sidebarBtnList = document.getElementsByClassName("sidebar-btn");

btnOpen[0].addEventListener("click", () => {
  sidebar[0].classList.add("active");
});

for (let btn of sidebarBtnList) {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar[0].classList.remove("active");
  });
}
