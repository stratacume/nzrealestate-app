document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("listingForm");
  const listingsContainer = document.getElementById("listings");

  // Load listings from localStorage
  const listings = JSON.parse(localStorage.getItem("nzListings")) || [];
  listings.forEach(listing => renderListing(listing));

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
      renderListing(listing);
      form.reset();
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  });

  
});
function renderListing({ title, desc, price, contact, imageUrl }) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
    <p><strong>Price:</strong> $${price}</p>
    <p><strong>Contact:</strong> ${contact}</p>
    ${imageUrl ? `<img src="${imageUrl}" alt="${title}" style="max-width: 100%; height: auto;">` : ""}
    <hr>
  `;
  listingsContainer.appendChild(div);
}


