// "use strict";

// window.onload = function() {
//   const locationDropdown = document.querySelector("#locationDropdown");
//   const parkTypeDropdown = document.querySelector("#parkTypeDropdown");

//   function loadStates() {
//     for (const location of locationsArray) {
//       let stateOption = document.createElement("option");
//       stateOption.value = location;
//       stateOption.innerText = location;
//       locationDropdown.appendChild(stateOption);
//     }
//   }

//   // function loadParkTypes() {
//   //   for (const parkType of parkTypesArray) {
//   //     let parkTypeOption = document.createElement("option");
//   //     parkTypeOption.value = parkType;
//   //     parkTypeOption.innerText = parkType;
//   //     parkTypeDropdown.appendChild(parkTypeOption);
//   //   }
//   function searchParkByLocation(){
// const selectedLocation = locationDropdown.value;
// if (selectedLocation === "choose") {
//   alert("Please select a location");
//   return;
// }
// // this performs the actual search
// const filteredParks = nationalParksArray.filter(park => park.Location === selectedLocation);
// displayParks(filteredParks);
// // Display the results
// for (const park of filteredParks) {
//   let row = document.createElement("tr");
//   row.innerHTML = `
//     <td>${park.LocationName}</td>
//     <td>${park.Address}</td>
//     <td>${park.City}</td>
//     <td>${park.State}</td>
//     <td>${park.ZipCode}</td>
//     <td>${park.Phone}</td>
//   `;
//   resultsTableBody.appendChild(row);

//   }
//     }
//     loadStates();
//     parkmountainsButton.addEventListener("click", searchParkByLocation);
//   // loadParkTypes();
//   }

"use strict";

window.onload = init;

function init() {
  loadStates();
  loadPark();
  searchButton.addEventListener("click", searchParks);
  searchButton2.addEventListener("click", searchParksByType);
}
  const locationDropdown = document.querySelector("#locationDropdown");
  const searchButton = document.querySelector("#searchButton");
  const searchButton2 = document.querySelector("#searchButton2");
  const resultsTableBody = document.querySelector("#resultsTable tbody");
  const resultsTableBody2 = document.querySelector("#resultsTable2 tbody");
  const parkList = document.querySelector("#parkList");


  function loadStates() {
    for (const location of locationsArray) {
      let stateOption = document.createElement("option");
      stateOption.value = location;
      stateOption.innerText = location;
      locationDropdown.appendChild(stateOption);
    }
  }
  function loadPark() {
    for (const parkTypesArrayList of parkTypesArray) {
      let parkOption = document.createElement("option");
      parkOption.value = parkTypesArrayList;
      parkOption.innerText = parkTypesArrayList;
      parkList.appendChild(parkOption);
    }
  }

  function searchParks() {
    const selectedLocation = locationDropdown.value;

    if (selectedLocation === "choose") {
      alert("Please select a location.");
      return;
    }

    // Clear previous results
    resultsTableBody.innerHTML = "";

    // Perform the search
    const filteredParks = nationalParksArray.filter(park => park.State === selectedLocation);

    if(filteredParks.length > 0){
    // Display the results
    for (const park of filteredParks) {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${park.LocationName}</td>
        <td>${park.Address}</td>
        <td>${park.City}</td>
        <td>${park.State}</td>
        <td>${park.ZipCode}</td>
        <td>${park.Phone}</td>
      `;
      resultsTableBody.appendChild(row);
    }
  } else {
    let row = document.createElement("tr");
    row.innerHTML = "No Results Found"
    resultsTableBody.appendChild(row);
  }
}

  // search parks by type function

  function searchParksByType() {
    const selectedParkType = parkList.value;

    if (selectedParkType === "choose") {
      alert("Please select a park type.");
      return;
    }

    // Clear previous results
    resultsTableBody2.innerHTML = "";

    // Perform the search
    const filteredParks = nationalParksArray.filter(park => park.LocationName.includes(selectedParkType));


  if(filteredParks.length > 0){
    // Display the results
    for (const park of filteredParks) {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${park.LocationName}</td>
        <td>${park.Address}</td>
        <td>${park.City}</td>
        <td>${park.State}</td>
        <td>${park.ZipCode}</td>
        <td>${park.Phone}</td>
      `;
      resultsTableBody2.appendChild(row);

  }
  } else {
        let row = document.createElement("tr");
        row.innerHTML = "No Results Found"
        resultsTableBody2.appendChild(row);
    }
  }


  //loadStates();
 // loadPark();
//  searchButton.addEventListener("click", searchParks);
  //searchButton2.addEventListener("click", searchParksByType);
