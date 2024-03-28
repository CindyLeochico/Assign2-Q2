document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const submittedDataDiv = document.getElementById("submittedData");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(registrationForm);
    const registrationData = {};
    formData.forEach((value, key) => {
      registrationData[key] = value;
    });

    // Calculate fee based on status
    let fee = 0;
    switch (registrationData.status) {
      case "student":
        fee = 10;
        break;
      case "staff":
        fee = 50;
        break;
      case "volunteer":
        fee = 0;
        break;
      default:
        fee = 0;
    }

    // Display submitted data and fee under the form
    submittedDataDiv.innerHTML = `<h2>Submitted Data</h2>
                                      <p><strong>ID:</strong> ${registrationData.id}</p>
                                      <p><strong>Full Name:</strong> ${registrationData.fullname}</p>
                                      <p><strong>Address:</strong> ${registrationData.address}</p>
                                      <p><strong>Status:</strong> ${registrationData.status}</p>
                                      <p><strong>Fee:</strong> $${fee}</p>`;

    // Show the submitted data
    submittedDataDiv.style.display = "block";
  });
});
