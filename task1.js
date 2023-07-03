 const images = document.querySelectorAll(".product-images img");
    let currentIndex = 0;

    function changeImage(n) {
      currentIndex += n;

      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      } else if (currentIndex >= images.length) {
        currentIndex = 0;
      }

      for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }

      images[currentIndex].style.display = "block";
    }
