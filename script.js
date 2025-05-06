document.getElementById('documentSelect').addEventListener('change', function () {
  const clauseMap = {
    "Due Diligence Clause": "This agreement is conditional on the buyer completing due diligence investigations...",
    "Finance Clause": "This agreement is conditional on the buyer obtaining finance on terms suitable...",
    "Building Inspection Clause": "This agreement is conditional on the buyer obtaining a satisfactory building report...",
    "Cash Out Clause": "This agreement may be cancelled by the vendor if a better offer is received...",
    "Solicitor’s Approval Clause": "This agreement is conditional on the buyer's solicitor approving the terms..."
  };
  const selected = this.value;
  const clauseTextDiv = document.getElementById('clauseText');

  if (selected.endsWith('.pdf')) {
    window.open(selected, '_blank');
    clauseTextDiv.innerHTML = '';
  } else {
    clauseTextDiv.innerHTML = `<em>${clauseMap[selected] || ''}</em>`;
  }
});