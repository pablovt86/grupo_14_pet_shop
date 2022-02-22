window.addEventListener('load', () => {

    /* Selecciono todos los inputs a validar */
    $email = document.querySelector('#email');
    $password = document.querySelector('#password');

    /* Selecciono todas las tags small para el envio de errores */
    $errorEmail = document.querySelector('#errorEmail');
    $errorPassword = document.querySelector('#errorPassword');
    $errorSubmit = document.querySelectorAll('.errorSubmit');

    /* Selecciono la tag form para el envio del formulario */
    $form = document.querySelector('#form');

    /* Expresiones regulares */
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    let validationErrors = false;

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
                $errorPassword.innerHTML = 'De 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número.';
                validationErrors = true;
            break;
        
            default:
                $errorPassword.innerHTML = '';
                validationErrors = false;
            break;
        }
    });

    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let error = false;
        let elementsForm = $form.elements;
        console.log(elementsForm);

        for (let i = 0; i < elementsForm.length - 1; i++){
            if(elementsForm[i].value == '' && elementsForm[i].type !== 'checkbox'){
                $errorSubmit[i].innerHTML = 'Este dato es obligatorio.';
                error = true;
            }
        }

        if(!error && !validationErrors){
            $form.submit();
        }
    });
});