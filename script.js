// // script for index2.html
// // using jquery (js librarie)
$(".slide").hiSlide();

// // script for like and dislike buttons
// // document.querySelectorAll(".post").forEach((post) => {
// //   const postId = post.dataset.postId;
// //   const ratings = post.querySelectorAll(".post-rating");
// //   const likeRating = ratings[0];

// //   ratings.forEach((rating) => {
// //     const button = rating.querySelector(".post-rating-button");
// //     const count = rating.querySelector(".post-rating-count");

// //     button.addEventListener("click", async () => {
// //       if (rating.classList.contains("post-rating-selected")) {
// //         return;
// //       }

// //       count.textContent = Number(count.textContent) + 1;

// //       ratings.forEach((rating) => {
// //         if (rating.classList.contains("post-rating-selected")) {
// //           const count = rating.querySelector(".post-rating-count");

// //           count.textContent = Math.max(0, Number(count.textContent) - 1);
// //           rating.classList.remove("post-rating-selected");
// //         }
// //       });

// //       rating.classList.add("post-rating-selected");
// //       const likeorDislike = likeRating === rating ? "like" : "dislike";
// //       const response = await fetch(`/post/${postId}/${likeorDislike}`);
// //       const body = await response.json();
// //     });
// //   });
// // });

// // Select all elements with the class "post" and iterate over them
// document.querySelectorAll(".post").forEach((post) => {
//   // Get the value of the "data-postId" attribute from the current post element
//   const postId = post.dataset.postId;

//   // Select all elements with the class "post-rating" within the current post
//   const ratings = post.querySelectorAll(".post-rating");

//   // Get the first element with the class "post-rating" (assumes there is at least one)
//   const likeRating = ratings[0];

//   // Iterate over all elements with the class "post-rating"
//   ratings.forEach((rating) => {
//     // Select the button and count elements within the current rating element
//     const button = rating.querySelector(".post-rating-button");
//     const count = rating.querySelector(".post-rating-count");

//     // Add a click event listener to the button
//     button.addEventListener("click", async () => {
//       // Check if the current rating is already selected, and if so, do nothing
//       if (rating.classList.contains("post-rating-selected")) {
//         return;
//       }

//       // Increment the count of the current rating by 1
//       count.textContent = Number(count.textContent) + 1;

//       // Iterate over all ratings to find and update the selected one
//       ratings.forEach((rating) => {
//         if (rating.classList.contains("post-rating-selected")) {
//           const count = rating.querySelector(".post-rating-count");

//           // Decrement the count of the selected rating by 1
//           count.textContent = Math.max(0, Number(count.textContent) - 1);

//           // Remove the "post-rating-selected" class from the selected rating
//           rating.classList.remove("post-rating-selected");
//         }
//       });

//       // Add the "post-rating-selected" class to the current rating
//       rating.classList.add("post-rating-selected");

//       // Determine if the current rating is the same as the likeRating
//       const likeorDislike = likeRating === rating ? "like" : "dislike";

//       // Make an asynchronous fetch request to update the server with the like or dislike
//       const response = await fetch(`/post/${postId}/${likeorDislike}`);

//       // Parse the JSON response
//       const body = await response.json();
//     });
//   });
// });
