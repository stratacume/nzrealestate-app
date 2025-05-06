document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("listingForm");
  const listingsContainer = document.getElementById("listings");
  let listings = JSON.parse(localStorage.getItem("nzListings")) || [];

  listings.forEach((listing, index) => renderListing(listing, index));

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = form.title.value;
    const desc = form.description.value;
    const price = form.price.value;
    const contact = form.contact.value;
    const imageFile = form.image.files[0];

    const reader = new FileReader();
    reader.onloadend = function () {
      const imageUrl = reader.result;

      const listing = { title, desc, price, contact, imageUrl };
      listings.push(listing);
      localStorage.setItem("nzListings", JSON.stringify(listings));
      refreshListings();
      form.reset();
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      const listing = { title, desc, price, contact, imageUrl: "" };
      listings.push(listing);
      localStorage.setItem("nzListings", JSON.stringify(listings));
      refreshListings();
      form.reset();
    }
  });

  function renderListing({ title, desc, price, contact, imageUrl }, index) {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${title}</h3>
      <p>${desc}</p>
      <p><strong>Price:</strong> $${price}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      ${imageUrl ? `<img src="${imageUrl}" alt="${title}" width="100%">` : ""}
      <br>
      <button onclick="editListing(${index})">Edit</button>
      <button onclick="deleteListing(${index})">Delete</button>
      <hr>
    `;

    listingsContainer.appendChild(div);
  }

  window.deleteListing = function (index) {
    listings.splice(index, 1);
    localStorage.setItem("nzListings", JSON.stringify(listings));
    refreshListings();
  };

  window.editListing = function (index) {
    const listing = listings[index];
    document.getElementById("title").value = listing.title;
    document.getElementById("description").value = listing.desc;
    document.getElementById("price").value = listing.price;
    document.getElementById("contact").value = listing.contact;

    listings.splice(index, 1); // delete old version
    refreshListings();
  };

  function refreshListings() {
    listingsContainer.innerHTML = "";
    listings.forEach((listing, index) => renderListing(listing, index));
  }
});

