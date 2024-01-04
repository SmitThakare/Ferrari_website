const form = document.querySelector('#registration-form');
const outputDiv = document.querySelector('#output');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements['name'].value;
    const dob = form.elements['dob'].value;
    const licenseNumber = form.elements['license-number'].value;
    const expiryDate = form.elements['expiry-date'].value;

    if (!name) {
        alert('Please enter your name.');
    } else if (!dob) {
        alert('Please enter your date of birth.');
    } else if (!licenseNumber || licenseNumber.length < 8) {
        alert('Please enter a valid license number.');
    } else if (!expiryDate) {
        alert('Please enter your license expiry date.');
    } else {
        outputDiv.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>License Number:</strong> ${licenseNumber}</p>
      <p><strong>Expiry Date:</strong> ${expiryDate}</p>
    `;
        form.reset();
    }
});
