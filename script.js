(function () {
   const form = document.querySelector('form');
   const inputFields = document.querySelectorAll('.signup__form--input');

   function validateEmail(emailField) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      return reg.test(emailField);
   }


   form.addEventListener('submit', e => {
      // Check Empty fields

      let goodToGo = true;
      // Check Email Validation
      inputFields.forEach(field => {
         const currentField = field.querySelector('input');
         const currentErrorLabel = field.querySelector('label');
         const currentErrorIcon = field.querySelector('svg');

         if (currentField.value.trim() == '') {
            goodToGo = false;
            currentField.style.borderColor = "var(--primary-red)";
            currentErrorIcon.style.display = "inline-block";
            const data = currentErrorLabel.dataset.for;
            currentErrorLabel.textContent = `${data} cannot be empty`;
         } else {
            currentField.style.borderColor = "";
            currentErrorLabel.textContent = ``;
            currentErrorIcon.style.display = "none";
         }


         if (currentField.type == 'email' && currentField.value.trim() != '') {

            if (!validateEmail(currentField.value)) {
               currentField.style.borderColor = "var(--primary-red)";
               currentErrorLabel.textContent = 'Looks like this is not an email';
               currentErrorIcon.style.display = "inline-block";
            } else {
               currentField.style.borderColor = "";
               currentErrorLabel.textContent = ``;
               currentErrorIcon.style.display = "none";
            }
         }
      });

      if (!goodToGo) {
         e.preventDefault();
      }
   });



})();