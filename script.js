
document.getElementById('agreementForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const buyer = document.getElementById('buyer').value;
    const seller = document.getElementById('seller').value;
    const address = document.getElementById('address').value;
    const buyerEmail = document.getElementById('buyerEmail').value;
    const sellerEmail = document.getElementById('sellerEmail').value;

    const selectedClauses = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(c => c.value).join("\n");

    const agreementText = `
        BUYER: ${buyer}
        SELLER: ${seller}
        ADDRESS: ${address}
        CLAUSES:
        ${selectedClauses}
    `;

    console.log("Agreement Generated:\n" + agreementText);
    alert("Agreement generated. You can now email it manually.");
});
