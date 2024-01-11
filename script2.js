// script for like and dislike buttons at index.html

// Select all elements with the class "post" and iterate over them
document.querySelectorAll(".post").forEach((post) => {
  // Get the value of the "data-postId" attribute from the current post element
  const postId = post.dataset.postId;

  // Select all elements with the class "post-rating" within the current post
  const ratings = post.querySelectorAll(".post-rating");

  // Get the first element with the class "post-rating" (assumes there is at least one)
  const likeRating = ratings[0];

  // Iterate over all elements with the class "post-rating"
  ratings.forEach((rating) => {
    // Select the button and count elements within the current rating element
    const button = rating.querySelector(".post-rating-button");
    const count = rating.querySelector(".post-rating-count");

    // Add a click event listener to the button
    button.addEventListener("click", async () => {
      // Check if the current rating is already selected, and if so, do nothing
      if (rating.classList.contains("post-rating-selected")) {
        return;
      }

      // Increment the count of the current rating by 1
      count.textContent = Number(count.textContent) + 1;

      // Iterate over all ratings to find and update the selected one
      ratings.forEach((rating) => {
        if (rating.classList.contains("post-rating-selected")) {
          const count = rating.querySelector(".post-rating-count");

          // Decrement the count of the selected rating by 1
          count.textContent = Math.max(0, Number(count.textContent) - 1);

          // Remove the "post-rating-selected" class from the selected rating
          rating.classList.remove("post-rating-selected");
        }
      });

      // Add the "post-rating-selected" class to the current rating
      rating.classList.add("post-rating-selected");

      // Determine if the current rating is the same as the likeRating
      const likeorDislike = likeRating === rating ? "like" : "dislike";

      // Make an asynchronous fetch request to update the server with the like or dislike
      const response = await fetch(`/post/${postId}/${likeorDislike}`);

      // Parse the JSON response
      const body = await response.json();
    });
  });
});

// script for slider at index3.html
const slider = document.querySelector(".slider"); //grand child container

// targeting all items with class of slide
const slides = document.querySelectorAll(".slide");

// targeting prev button
const prevBtn = document.querySelector(".prev");

//targeting next button
const nextBtn = document.querySelector(".next");

// setting a variable index = 0
let slideIndex = 0;
slides[slideIndex].classList.add("active");

//setting an addEventListener for the buttons
prevBtn.addEventListener("click", prevslide);
nextBtn.addEventListener("click", nextSlide);

// function for the buttons
function prevslide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
  slides[slideIndex].classList.add("active");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
function nextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
  slides[slideIndex].classList.add("active");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
