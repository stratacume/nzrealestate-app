function toggleClause(checkbox) {
    const textarea = document.getElementById(checkbox.value);
    textarea.style.display = checkbox.checked ? "block" : "none";
}

function generateAgreement() {
    const clauses = document.querySelectorAll(".clause input[type='checkbox'], .clause");
    let agreement = "PRIVATE RESIDENTIAL SALE & PURCHASE AGREEMENT\n\nSELECTED CLAUSES:\n\n";

    clauses.forEach(cb => {
        if (cb.checked) {
            const text = document.getElementById(cb.value).value.trim();
            agreement += "- " + cb.value + ":\n" + text + "\n\n";
        }
    });

    document.getElementById("output").textContent = agreement;
}