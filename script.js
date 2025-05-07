function generatePDF() {
    const buyerName = document.getElementById("buyerName").value;
    const sellerName = document.getElementById("sellerName").value;
    const propertyAddress = document.getElementById("propertyAddress").value;
    const selectedClauses = Array.from(document.querySelectorAll('input[name="clauses"]:checked'))
        .map(cb => cb.value).join('\n');

    const agreementText = `
SALE & PURCHASE AGREEMENT

Buyer: ${buyerName}
Seller: ${sellerName}
Property Address: ${propertyAddress}

Included Clauses:
${selectedClauses}

Signed by the parties on this date.
    `;

    const blob = new Blob([agreementText], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Sale_Purchase_Agreement.pdf";
    link.click();
}
// Email the generated PDF (requires backend or email API service like EmailJS)
function emailAgreement(pdfBlob, recipientEmail) {
    const formData = new FormData();
    formData.append("to", recipientEmail);
    formData.append("subject", "NZ Real Estate Agreement");
    formData.append("body", "Please find the attached agreement.");
    formData.append("attachment", pdfBlob, "agreement.pdf");

    fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Email sent successfully.");
        } else {
            alert("Failed to send email.");
        }
    })
    .catch(error => {
        console.error("Error sending email:", error);
        alert("An error occurred while sending the email.");
    });
}
