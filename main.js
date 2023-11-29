let emailForm = document.getElementById("email-form");
    let emailField = document.getElementById("email-field");
    let emailBtn = document.getElementById("email-btn");
    let errorPop = document.getElementById("error-pop-up");
    let successPop = document.getElementById("success-container");
    let hero = document.querySelector(".container");
    let successBtn = document.querySelector(".success-button");

    let emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    const validateEmail = () => {

      if (!emailField.value.match(emailRegex)){
        const error = [
          errorPop.innerHTML = "Valid email required",
          errorPop.style.color = "red",
        ];
        emailField.style.borderColor = 'red';
        return false;
      }else{
        errorPop.innerHTML = "";
        emailField.style.borderColor = 'green';
        return true;
      }
    }

    emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateEmail()) {
    hero.classList.add("hide");
    successPop.classList.remove("hide");
  } else {
    hero.classList.remove("hide");
    successPop.classList.add("hide");
  }
  
    });
    