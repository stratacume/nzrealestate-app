
document.getElementById('agreementForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const buyer = form.buyer.value;
    const seller = form.seller.value;
    const address = form.address.value;
    const email = form.email.value;
    const clauses = [...form.clauses].filter(c => c.checked).map(c => c.value);

    const docContent = `
        Sale and Purchase Agreement
        ---------------------------
        Buyer: ${buyer}
        Seller: ${seller}
        Property Address: ${address}

        Included Clauses:
        ${clauses.join('\n')}
    `;

    const blob = new Blob([docContent], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'NZ_Sale_Agreement.pdf';
    link.click();

    document.getElementById('status').innerText = 'Agreement generated. Email function to be handled by backend.';
});

function navigateTo(select) {
    const value = select.value;
    if (value.startsWith("#")) {
        location.hash = value;
    } else if (value) {
        window.open(value, "_blank");
    }
}
