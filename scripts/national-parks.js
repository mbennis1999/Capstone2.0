"use strict";

window.onload = function() {
  const locationDropdown = document.querySelector("#locationDropdown");
  const parkTypeDropdown = document.querySelector("#parkTypeDropdown");

  function loadStates() {
    for (const location of locationsArray) {
      let stateOption = document.createElement("option");
      stateOption.value = location;
      stateOption.innerText = location;
      locationDropdown.appendChild(stateOption);
    }
  }

  function loadParkTypes() {
    for (const parkType of parkTypesArray) {
      let parkTypeOption = document.createElement("option");
      parkTypeOption.value = parkType;
      parkTypeOption.innerText = parkType;
      parkTypeDropdown.appendChild(parkTypeOption);
    }
  }

  loadStates();
  loadParkTypes();
}
