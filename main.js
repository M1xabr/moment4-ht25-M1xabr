document.addEventListener("DOMContentLoaded", () => {
  const fullName = document.getElementById("fullname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const font = document.getElementById("font");
  const generateBtn = document.getElementById("generate");
  const clearBtn = document.getElementById("clear");

  const previewName = document.getElementById("previewfullname");
  const previewEmail = document.getElementById("previewemail");
  const previewPhone = document.getElementById("previewphone");
  const errorsList = document.getElementById("errors");

  generateBtn.addEventListener("click", () => {
    errorsList.innerHTML = "";
    let errors = [];

    if (fullName.value.trim() === "") errors.push("Du måste ange ett namn.");
    if (email.value.trim() === "") errors.push("Du måste ange en e-postadress.");
    if (phone.value.trim() === "") errors.push("Du måste ange ett telefonnummer.");

    if (errors.length > 0) {
      errors.forEach(err => {
        const li = document.createElement("li");
        li.textContent = err;
        errorsList.appendChild(li);
      });
      return;
    }

    previewName.textContent = fullName.value;
    previewEmail.textContent = email.value;
    previewPhone.textContent = phone.value;

    previewName.style.fontFamily = font.value;
    previewEmail.style.fontFamily = font.value;
    previewPhone.style.fontFamily = font.value;
  });

  clearBtn.addEventListener("click", () => {
    fullName.value = "";
    email.value = "";
    phone.value = "";
    font.value = "Arial";
    previewName.textContent = "";
    previewEmail.textContent = "";
    previewPhone.textContent = "";
    errorsList.innerHTML = "";
  });
});
