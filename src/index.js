import axios from "axios";
const api = "https://jqbx.fm/room";
const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const users = document.querySelector(".users");
const djs = document.querySelector(".djs");
const results = document.querySelector(".result-container");
results.style.display = "none";
loading.style.display = "none";
errors.textContent = "";
// grab the form
const form = document.querySelector(".form-data");
// grab the country name
const room = document.querySelector(".room-handle");

// declare a method to search by room handle
const searchForRoom = async roomHandle => {
  loading.style.display = "block";
  errors.textContent = "";
  try {
    const response = await axios.get(`${api}/${roomHandle}`);
    loading.style.display = "none";
    users.textContent = response.data.users.length;
    djs.textContent = response.data.djs.length;
    results.style.display = "block";
  } catch (error) {
    loading.style.display = "none";
    results.style.display = "none";
    errors.textContent = "We have no data for the room you have requested.";
  }
};

// declare a function to handle form submission
const handleSubmit = async e => {
  e.preventDefault();
  searchForRoom(room.value);
  console.log(room.value);
};

form.addEventListener("submit", e => handleSubmit(e));
