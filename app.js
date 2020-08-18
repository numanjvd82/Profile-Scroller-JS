// Event Listener
const nextEvent = document
  .getElementById("next")
  .addEventListener("click", getProfile);

// Profile Data
const data = [
  {
    name: "John Doe",
    age: 25,
    gender: "Male",
    employment: "Business-Man",
    location: "New York",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Smith James",
    age: 32,
    gender: "Male",
    employment: "Bartender",
    location: "Porvoo, Finland",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    name: "Anna Williams",
    age: 27,
    gender: "Female",
    employment: "Social Media Influencer",
    location: "Boston, MA",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const profiles = profileIterator(data);

// Call first Profile
getProfile();

// Event Function

function getProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById(
      "profileDisplay"
    ).innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  <li class="list-group-item">Gender: ${currentProfile.gender}</li>
  <li class="list-group-item">Employment: ${currentProfile.employment}</li>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  </ul>`;

    document.getElementById("imageDisplay").innerHTML = `
  <img src="${currentProfile.image}" alt="">
  `;
  } else {
    // Reload the page
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let index = 0;
  return {
    next: function () {
      return index < profiles.length
        ? { value: profiles[index++], done: false }
        : { done: true };
    },
  };
}
