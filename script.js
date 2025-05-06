const form = document.getElementById("listingForm");
const listingsDiv = document.getElementById("listings");
const documentSelect = document.getElementById("documentSelect");
const clauseDisplay = document.getElementById("clauseDisplay");

const clauses = {
  due_diligence: "This agreement is conditional on the buyer being satisfied with the results of due diligence investigations within 10 working days.",
  finance: "This agreement is conditional on the buyer obtaining finance on terms suitable to the buyer within 10 working days.",
  building: "This agreement is conditional on the buyer obtaining a satisfactory building inspection report within 10 working days.",
  cash_out: "This agreement is subject to the sale of the buyer’s existing property.",
  solicitor: "This agreement is conditional on the approval of the buyer’s solicitor within 5 working days."
};

documentSelect.addEventListener("change", () => {
  const selected = documentSelect.value;
  if (selected === "sale") {
    clauseDisplay.innerHTML = `<a href="docs/sale_agreement.pdf" target="_blank">Download Sale & Purchase Agreement</a>`;
    clauseDisplay.style.display = "block";
  } else if (clauses[selected]) {
    clauseDisplay.textContent = clauses[selected];
    clauseDisplay.style.display = "block";
  } else {
    clauseDisplay.style.display = "none";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = form.title.value.trim();
  const description = form.description.value.trim();
  const price = form.price.value.trim();
  const contact = form.contact.value.trim();
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
      <img src="${event.target.result}" alt="Property Image"/>
    `;
    listingsDiv.prepend(newListing);
    form.reset();
  };

  if (imageInput.files[0]) {
    reader.readAsDataURL(imageInput.files[0]);
  }
});
