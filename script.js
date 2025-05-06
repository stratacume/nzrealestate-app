document.getElementById('listingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.querySelector('[name="title"]').value;
  const description = document.querySelector('[name="description"]').value;
  const price = document.querySelector('[name="price"]').value;
  const contact = document.querySelector('[name="contact"]').value;
  const imageInput = document.querySelector('[name="image"]');
  const listingsDiv = document.getElementById('listings');

  const reader = new FileReader();

  reader.onload = function(event) {
    const newListing = document.createElement('div');
    newListing.className = 'listing-card';
    newListing.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <p><strong>Price:</strong> $${price}</p>
      <p><strong>Contact:</strong> <a href="tel:${contact}">${contact}</a></p>
      <div class="location-tag">
        <img src="location-icon.svg" alt="Location Icon" class="icon">
        <span>Warkworth</span>
      </div>
      <img src="${event.target.result}" alt="Property Image">
      <div class="button-group">
        <button onclick="editListing(this)">Edit</button>
        <button onclick="deleteListing(this)">Delete</button>
      </div>
    `;
    listingsDiv.prepend(newListing);
  };

  if (imageInput.files[0]) {
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    const newListing = document.createElement('div');
    newListing.className = 'listing-card';
    newListing.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <p><strong>Price:</strong> $${price}</p>
      <p><strong>Contact:</strong> <a href="tel:${contact}">${contact}</a></p>
      <div class="location-tag">
        <img src="location-icon.svg" alt="Location Icon" class="icon">
        <span>Warkworth</span>
      </div>
      <div class="button-group">
        <button onclick="editListing(this)">Edit</button>
        <button onclick="deleteListing(this)">Delete</button>
      </div>
    `;
    listingsDiv.prepend(newListing);
  }

  // Reset form
  document.getElementById('listingForm').reset();
});

function editListing(button) {
  const card = button.closest('.listing-card');
  const title = prompt('Edit title:', card.querySelector('h3').textContent);
  const description = prompt('Edit description:', card.querySelectorAll('p')[0].textContent);

  if (title) card.querySelector('h3').textContent = title;
  if (description) card.querySelectorAll('p')[0].textContent = description;
}

function deleteListing(button) {
  const card = button.closest('.listing-card');
  card.remove();
}
const clauses = {
  due: "This agreement is conditional upon the Purchaser completing due diligence investigations to their satisfaction within X working days.",
  finance: "This agreement is conditional upon the Purchaser obtaining suitable finance within X working days.",
  building: "This agreement is conditional upon the Purchaser obtaining a satisfactory building inspection report within X working days.",
  cashout: "The Vendor reserves the right to insert a cash out clause. If another offer is received, the Purchaser will have 3 working days to confirm or cancel this agreement.",
  solicitor: "This agreement is conditional upon the approval of the Purchaser’s solicitor within X working days."
};

document.getElementById('clauseSelect').addEventListener('change', function () {
  const value = this.value;
  const preview = document.getElementById('clausePreview');
  preview.textContent = value ? clauses[value] : '';
});
const clauses = {
  due: "This agreement is conditional upon the Purchaser completing due diligence investigations to their satisfaction within X working days.",
  finance: "This agreement is conditional upon the Purchaser obtaining suitable finance within X working days.",
  building: "This agreement is conditional upon the Purchaser obtaining a satisfactory building inspection report within X working days.",
  cashout: "The Vendor reserves the right to insert a cash out clause. If another offer is received, the Purchaser will have 3 working days to confirm or cancel this agreement.",
  solicitor: "This agreement is conditional upon the approval of the Purchaser’s solicitor within X working days."
};

document.getElementById('clauseSelect').addEventListener('change', function () {
  const value = this.value;
  const preview = document.getElementById('clausePreview');
  preview.textContent = value ? clauses[value] : '';
});
