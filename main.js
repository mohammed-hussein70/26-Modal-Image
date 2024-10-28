function animation() {
  // Add display none to the container
  let container = document.querySelector(".cont");
  container.classList.add("hidden");
  // click on the Image
  let image1 = document.getElementById("image1");
  image1.addEventListener("click", function () {
    container.classList.remove("hidden");
  });
  //click on the bottom close
  let close = document.querySelector(".close");
  close.addEventListener("click", function () {
    container.classList.add("hidden");
  });
}
window.onload = animation();
