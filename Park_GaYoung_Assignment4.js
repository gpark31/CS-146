// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   var name = document.getElementById("formUsername").value;
   var cap = document.getElementById("formCaption").value;
   var image = document.getElementById("formImg").value;
   var imageLocation = fileLocations[image];
   // Pass values to addNewPost()
   addNewPost(name, cap, imageLocation);
}
/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
   // Create a span for the user
   // Create image element
   // Create overlay element
   // Add all child elements (order matters)
   // Add event listeners to post
   // Add post element to post list
   var postList = document.getElementById("postList");
   var newDiv = document.createElement("div"); 
      newDiv.classList.add("post");

   var newSpan = document.createElement("span");
      newSpan.innerText = username;

   var newImage = document.createElement("img");
      newImage.src = imgLocation;
      newImage.alt = caption;

   var newOverlay = document.createElement("div");
      newOverlay.classList.add("postOverlay");
      newOverlay.innerText = caption;

   newDiv.addEventListener("mouseover", function(event){
      event.target.setAttribute("style","opacity:1"); 

   }, );
   newDiv.addEventListener("mouseleave", function(event) {
      event.target.children[2].setAttribute("style","opacity:0"); 

   }, );
   
   postList.appendChild(newDiv);
   newDiv.appendChild(newSpan);
   newDiv.appendChild(newImage);
   newDiv.appendChild(newOverlay);

}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};