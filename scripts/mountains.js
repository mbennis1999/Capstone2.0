"use strict";

window.onload = function () {
  // Get references to the HTML elements
  const mountainDropdown = document.querySelector("#mountainDropdown");
  const showMountainInfo = document.querySelector("#showMountainInfo");
  const mountainImageDisplay = document.querySelector("#mountainImageDisplay");
  const mountainInfoDisplay = document.querySelector("#mountainInfoDisplay");

  // Function to load mountains into the dropdown
  function loadMountains() {
    // Loop through the array of mountains
    mountainsArray.forEach((mountain) => {
      // Create a new option element for each mountain
      const option = document.createElement("option");
      // Set the text of the option to the mountain's name
      option.innerText = mountain.name;
      // Set the value of the option to the mountain's name
      option.value = mountain.name;
      // Add the option to the dropdown menu
      mountainDropdown.appendChild(option);
    });
  }

  // Function to display the selected mountain's information and image
  function displayMountainInfo() {
    // Get the name of the selected mountain
    const selectedMountainName = mountainDropdown.value;

    // Clear any previous display content
    mountainImageDisplay.innerHTML = "";
    mountainInfoDisplay.innerHTML = "";

    // Find the selected mountain in the array
    const selectedMountain = mountainsArray.find(
      (mountain) => mountain.name === selectedMountainName
    );

    // Check if a mountain was found
    if (selectedMountain) {
      // Create an image element for the mountain
      const imgElement = document.createElement("img");
      // Set the source of the image to the mountain's image file
      imgElement.src = `images/${selectedMountain.img}`;
      // Set the alt text of the image to the mountain's name
      imgElement.alt = selectedMountain.name;

      // Create a paragraph element for the mountain's description
      const descElement = document.createElement("p");
      // Set the text of the paragraph to the mountain's description
      descElement.innerText = selectedMountain.desc;

      // Add the image to the image display div
      mountainImageDisplay.appendChild(imgElement);
      // Add the description to the info display div
      mountainInfoDisplay.appendChild(descElement);
    }
  }

  // Load the mountains into the dropdown when the page loads
  loadMountains();

  // Set up the button to display the mountain info when clicked
  showMountainInfo.onclick = displayMountainInfo;
};