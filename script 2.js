
function submitListing() {
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;
  const location = document.getElementById('location').value;
  const image = document.getElementById('image').files[0];
  alert(`Submitted: ${title} - ${price} - ${location} - ${image.name}`);
}

function generatePDF() {
  const buyer = document.getElementById('buyer').value;
  const seller = document.getElementById('seller').value;
  const clauses = document.getElementById('clauses').value;
  const blob = new Blob([`Agreement
Buyer: ${buyer}
Seller: ${seller}
Clauses:
${clauses}`], {type: 'application/pdf'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'agreement.pdf';
  link.click();
}
