function sendEmail() {

  // Variables
  const email = document.getElementById('email').value
  const voornaam = document.getElementById('voornaam').value
  const achternaam = document.getElementById('achternaam').value
  const adres = document.getElementById('adres').value
  const toevoeging = document.getElementById('toevoeging').value
  const postcode = document.getElementById('postcode').value
  const stad = document.getElementById('stad').value
  const telefoonnummer = document.getElementById('telefoonnummer').value
  const bericht = document.getElementById('bericht').value

  // Customize your email message here
  const emailMessage = `
  Email from: ${email} <br>
  Voornaam: ${voornaam} <br>
  Achternaam: ${achternaam} <br>
  Straat + huisnummer: ${adres} <br>
  Toevoeging: ${toevoeging} <br>
  Postcode: ${postcode} <br>
  Stad: ${stad} <br>
  Telefoonnummer: ${telefoonnummer} <br>
  Bericht: ${bericht}<br>
  `;

  // Define an array of input element IDs you want to check
  var elementIds = ['email', 'achternaam', 'adres', 'postcode', 'stad', 'telefoonnummer'];
  var emptyElementCount = 0

  // Iterate through the element IDs
  for (var i = 0; i < elementIds.length; i++) {
    var elementId = elementIds[i];
    var element = document.getElementById(elementId);
    
    // Check if the element's value is empty
    if (element.value === '') {
      emptyElementCount++;
      element.style.border = "solid 1px red";
    } else {
      // Reset the border style if not empty
      element.style.border = ""; // or null to remove the border
    }
  }

  // Do not send if required field not filled in
  if (emptyElementCount > 0) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block"; 
    return
  }
  errorMessage.style.display = "none"; 

  // Else send with SMTP (fill in details)
  Email.send({
      Host : "host.example.com",
      Username: "info@example.com",
      Password: "your_password",
      To: "info@example.com",
      From: "info@example.com",
      Subject: "Offerte Aanvraag",
      Body: emailMessage
  }).then((message) => {
      if (message != 'OK') {
        alert('Er is iets mis gegaan. Probeer het later nog eens.');
      }
    });

  // Display succes message
  var successMessage = document.getElementById("success-message");
  successMessage.style.display = "block"; 

  // Clear all input fields
  elementIds.forEach(function (elementId) {
    var element = document.getElementById(elementId);
    element.value = ''; // Set the value to an empty string
  });

};
