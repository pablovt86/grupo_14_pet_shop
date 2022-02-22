window.addEventListener('load', () => {

    /* Selecciono todos los inputs a validar */
    $name = document.querySelector('#agregar-nombre');
    $price = document.querySelector('#agregar-precio');
    $discount = document.querySelector('#agregar-discount');
    $description = document.querySelector('#descripcion');
    $image = document.querySelector('#image-create-product');
    $stock = document.querySelector('#agregar-cantidad');

    /* Selecciono todas las tags small para el envio de errores */
    $errorName = document.querySelector('#errorNombre');
    $errorPrice = document.querySelector('#errorPrice');
    $errorDiscount = document.querySelector('#errorDiscount');
    $errorDescription = document.querySelector('#errorDescription');
    $errorImage = document.querySelector('#errorImage');
    $errorStock = document.querySelector('#errorStock');
    $errorSubmit = document.querySelectorAll('.errorSubmit');

    /* Selecciono la tag form para el envio del formulario */
    $form = document.querySelector('#formProduct');

    /* Expresion regular */
    regExImage = /(.jpg|.jpeg|.png|.gif|.webp)$/i;

    let validationErrors = false;

    $name.addEventListener('blur', () => {
        switch (true) {
            case !$name.value.trim():
                $errorName.innerHTML = 'Complete con nombre, marca, etc...';
                validationErrors = true;
            break;

            case $name.value.length > 45:
                $errorName.innerHTML = 'Máximo permitido 45 caracteres.';
                validationErrors = true;
            break;
        
            default:
                $errorName.innerHTML = '';
                validationErrors = false;
            break;
        }
    });

    $price.addEventListener('blur', () => {
        switch (true) {
            case !$price.value.trim():
                $errorPrice.innerHTML = 'El producto necesita un precio.';
                validationErrors = true;
            break;

            case !Number($price.value):
                $errorPrice.innerHTML = 'El valor debe ser numérico distinto de 0.';
                validationErrors = true;
            break;
        
            default:
                $errorPrice.innerHTML = '';
                validationErrors = false;
            break;
        }
    });

    $discount.addEventListener('change', () => {
        switch (true) {
            case !Number($discount.value):
                $errorDiscount.innerHTML = 'El valor debe ser numérico distinto de 0.';
                validationErrors = true;
            break;
        
            default:
                $errorDiscount.innerHTML = '';
                validationErrors = false;
            break;
        }
    });

    $description.addEventListener('blur', () => {
        switch (true) {
            case !$description.value.trim():
                $errorDescription.innerHTML = 'Incluya una breve descripción.';
                validationErrors = true;
            break;

            case $description.value.length > 1200:
                $errorDescription.innerHTML = 'Máximo permitido 255 caracteres.';
                validationErrors = true;
            break;
        
            default:
                $errorDescription.innerHTML = '';
                validationErrors = false;
            break;
        }
    });

    $image.addEventListener('change', () => {
        if (regExImage.exec($image.value)) {
            const file = $image.files[0];
            const imagen = URL.createObjectURL(file);
            const img = document.querySelector('#imagen-previa');
            img.src = imagen;
            $errorImage.innerHTML = '';
        } else {
            $errorImage.innerHTML = 'Solo extensiones .jpg .jpeg .png .webp'
        }
    });

    $stock.addEventListener('blur', () => {
        switch (true) {
            case !$stock.value.trim():
                $errorStock.innerHTML = 'Debe ingresar cantidad de unidades.';
                validationErrors = true;
            break;

            case !Number($stock.value):
                $errorStock.innerHTML = 'El valor debe ser numérico distinto de 0.';
                validationErrors = true;
            break;
        
            default:
                $errorStock.innerHTML = '';
                validationErrors = false;
            break;
        }
    });

    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let error = false;

        [...$errorSubmit].forEach(element => {
            const div = element.parentElement;
            const input = div.querySelector('input');
            if(input.value == ''){
                element.innerHTML = 'Este dato es obligatorio.';
                error = true;
            }
        });

        if(!error && !validationErrors){
            $form.submit();
        }
    });
})