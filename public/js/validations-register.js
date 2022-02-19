window.addEventListener('load', () => {

    /* Selecciono todos los inputs a validar */
    $name = document.querySelector('#name');
    $lastName = document.querySelector('#lastName');
    $email = document.querySelector('#email');
    $password = document.querySelector('#password');
    $pass2 = document.querySelector('#pass2');
    $avatar = document.querySelector('#avatar');
    $terms = document.querySelector('#terms');

    /* Selecciono todas las tags small para el envio de errores */
    $errorName = document.querySelector('#errorName');
    $errorLastName = document.querySelector('#errorLastName');
    $errorEmail = document.querySelector('#errorEmail');
    $errorPassword = document.querySelector('#errorPassword');
    $errorPass2 = document.querySelector('#errorPass2');
    $errorAvatar = document.querySelector('#errorAvatar');
    $errorTerms = document.querySelector('#errorTerms');
    $errorSubmit = document.querySelectorAll('.errorSubmit');

    /* Selecciono la tag form para el envio del formulario */
    $form = document.querySelector('#form');

    /* Expresiones regulares */
    regExName = /^[a-zA-Z\sñáéíóúü ]*$/;
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    regExImage = /(.jpg|.jpeg|.png|.gif|.webp)$/i;

    let validationErrors = false;

    $name.addEventListener('blur', () => {
        switch (true) {
            case !$name.value.trim():
                $errorName.innerHTML = 'El nombre no puede estar vacío.';
                validationErrors = true;
            break;

            case !regExName.test($name.value):
                $errorName.innerHTML = 'Debe ingresar un nombre válido.';
                validationErrors = true;
            break;
        
            default:
                $errorName.innerHTML = '';
                $inputName.classList.add('is-valid');
                validationErrors = false;
            break;
        }
    });

    $lastName.addEventListener('blur', () => {
        switch (true) {
            case !$lastName.value.trim():
                $errorLastName.innerHTML = 'El apellido no puede estar vacío.';
                validationErrors = true;
            break;

            case !regExName.test($lastName.value):
                $errorLastName.innerHTML = 'Debe ingresar un apellido válido.';
                validationErrors = true;
            break;
        
            default:
                $errorLastName.innerHTML = '';
                validationErrors = false;
            break;
        }
    });

    $email.addEventListener('blur', () => {
        switch (true) {
            case !$email.value.trim():
                $errorEmail.innerHTML = 'El email es obligatorio.';
                validationErrors = true;
            break;

            case !regExEmail.test($email.value):
                $errorEmail.innerHTML = 'Debe ingresar un email válido.';
                validationErrors = true;
            break;
        
            default:
                $errorEmail.innerHTML = '';
                validationErrors = false;
            break;
        }
    });

    $password.addEventListener('blur', () => {
        switch (true) {
            case !$password.value.trim():
                $errorPassword.innerHTML = 'La contraseña es obligatoria.';
                validationErrors = true;
            break;

            case !regExPass.test($password.value):
                $errorPassword.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número.';
                validationErrors = true;
            break;
        
            default:
                $errorPassword.innerHTML = '';
                validationErrors = false;
            break;
        }
    });

    $pass2.addEventListener('blur', () => {
        switch (true) {
            case !$pass2.value.trim():
                $errorPass2.innerHTML = 'Debe confirmar la contraseña.'
                validationErrors = true;
            break;

            case $pass2.value !== $password.value:
                $errorPass2.innerHTML = 'Las contraseñas deben coincidir.'
                validationErrors = true;
            break;
        
            default:
                $errorPass2.innerHTML = '';
                validationErrors = false;
            break;
        }
    });

    $avatar.addEventListener('change', () => {
        if (regExImage.exec($avatar.value)) {
            const file = $avatar.files[0];
            const imagen = URL.createObjectURL(file);
            const img = document.getElementById('user-profile');
            img.src = imagen;
            $errorAvatar.innerHTML = '';
        } else {
            $errorAvatar.innerHTML = 'Solo extensiones .jpg .jpeg .png .webp'
        }
    });

    $terms.addEventListener('click', () => {
        $terms.value = "on";
        $errorTerms.innerHTML = "";
    });

    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let error = false;
        let elementsForm = $form.elements;

        for (let i = 0; i < elementsForm.length - 1; i++){
            if(elementsForm[i].value == '' && elementsForm[i].type !== 'file'){
                $errorSubmit[i].innerHTML = 'Este dato es obligatorio.';
                error = true;
            }
        }

        if(!$terms.checked){
            $errorTerms.innerHTML = 'Debe aceptar términos y condiciones.';
            error = true;
        }

        if(!error && !validationErrors){
            $form.submit();
        }
    });

});