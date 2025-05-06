const form = document.getElementById("listingForm");
const listingsDiv = document.getElementById("listings");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = form.title.value;
  const description = form.description.value;
  const price = form.price.value;
  const contact = form.contact.value;
  const imageInput = form.image;

  const reader = new FileReader();

  reader.onload = function (event) {
    const newListing = document.createElement("div");
    newListing.className = "listing-card";
    newListing.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <p><strong>Price:</strong> $${price}</p>
      <p><strong>Contact:</strong> <a href="tel:${contact}">${contact}</a></p>
      <div class="location-tag">
        <img src="location-icon.svg" alt="Location Icon" />
        <span>Warkworth</span>
      </div>
      <img src="${event.target.result}" alt="Property Image" />
      <div class="button-group">
        <button onclick="editListing(this)">Edit</button>
        <button onclick="deleteListing(this)">Delete</button>
      </div>
    `;
    listingsDiv.prepend(newListing);
    form.reset();
  };

  if (imageInput.files[0]) {
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    const newListing = document.createElement("div");
    newListing.className = "listing-card";
    newListing.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <p><strong>Price:</strong> $${price}</p>
      <p><strong>Contact:</strong> <a href="tel:${contact}">${contact}</a></p>
      <div class="location-tag">
        <img src="location-icon.svg" alt="Location Icon" />
        <span>Warkworth</span>
      </div>
      <div class="button-group">
        <button onclick="editListing(this)">Edit</button>
        <button onclick="deleteListing(this)">Delete</button>
      </div>
    `;
    listingsDiv.prepend(newListing);
    form.reset();
  }
});

function editListing(button) {
  const card = button.closest(".listing-card");
  const title = prompt("Edit title:", card.querySelector("h3").textContent);
  if (title) card.querySelector("h3").textContent = title;
}

function deleteListing(button) {
  const card = button.closest(".listing-card");
  card.remove();
}

function displayClause() {
  const clauses = {
    dueDiligence: "This agreement is subject to the buyer being satisfied with due diligence investigations within 10 working days.",
    finance: "This agreement is conditional on the buyer obtaining finance on terms suitable to the buyer within 10 working days.",
    buildingInspection: "This agreement is subject to a building inspection report satisfactory to the buyer.",
    cashOut: "The vendor reserves the right to give 3 working days’ notice to go unconditional if another offer is received.",
    solicitorApproval: "This agreement is conditional upon the buyer’s solicitor approving the terms within 5 working days."
  };

  const selected = document.getElementById("clauseSelector").value;
  const display = document.getElementById("clauseText");

  if (clauses[selected]) {
    display.innerText = clauses[selected];
  } else {
    display.innerText = "";
  }
}
