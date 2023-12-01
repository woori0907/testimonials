$(document).ready(function () {
  const images = $(".item_img").get();
  const texts = $(".testimonial").get();
  let currentIndex = 0;
  console.log(images, texts);
  $("#btn_next").on("click", function () {
    let index = currentIndex + 1;
    if (currentIndex === images.length - 1) {
      index = 0;
    }
    images[currentIndex].classList.add("hidden");
    images[index].classList.remove("hidden");
    texts[currentIndex].classList.add("hidden");
    texts[index].classList.remove("hidden");
    currentIndex = index;
  });
  $("#btn_prev").on("click", function () {
    let index = currentIndex - 1;
    if (currentIndex === 0) {
      index = images.length - 1;
    }
    images[currentIndex].classList.add("hidden");
    images[index].classList.remove("hidden");
    texts[currentIndex].classList.add("hidden");
    texts[index].classList.remove("hidden");
    currentIndex = index;
  });
});
