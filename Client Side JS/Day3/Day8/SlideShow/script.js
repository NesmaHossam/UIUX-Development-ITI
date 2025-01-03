// - Photo Gallery

//     Photo gallery with Next, Previous and Slideshow.
//     ▪ Next goes to next pic and stops when reaching last image.
//     ▪ Previous goes back to previous image and stops when reaching first image
//     ▪ Slideshow will circulate.

//     <aside>
//     💡  i.e. when reach last image is should continue displaying staring
//     from first image

//     </aside>

//     ▪ Stop will stop slideshow behavior.
//     ▪ Let the delay between every image lasts 2 seconds.




const gallery = document.getElementById("gallery");
const images = gallery.getElementsByTagName("img");

var imageIndex = 0;
function showImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  images[imageIndex].style.display = "block";
}

function nextImage() {
  imageIndex++;

  if (imageIndex >= images.length) {
    imageIndex = images.length - 1;
  }

  showImage();
}

function prevImage() {
  imageIndex--;

  if (imageIndex < 0) {
    imageIndex = 0;
  }

  showImage();
}


function nextSlideshowImage() {
  imageIndex++;

  if (imageIndex >= images.length) {
    imageIndex = 0;
  }

  showImage();
}


let slideshowInterval;
function startSlideshow() {
  slideshowInterval = setInterval(nextSlideshowImage, 2000);

}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slideshowButton = document.getElementById("slideshow");
const stopButton = document.getElementById("stop");
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
slideshowButton.addEventListener("click", startSlideshow);
stopButton.addEventListener("click", stopSlideshow);

showImage();