window.addEventListener('load', () => {

    $inputs = document.querySelectorAll('.require');
    $smalls = document.querySelectorAll('small');
    $form = document.querySelector('#formProduct');

    regExImage = /(.jpg|.jpeg|.png|.gif|.webp)$/i;

    let validationErrors = false;

    for (let i = 0; i < $inputs.length; i++) {
        $inputs[i].addEventListener('change', () => {
            switch ($inputs[i].name) {
                case 'nombre':
                    if ($inputs[i].value.trim() == '' || ($inputs[i].value.trim()).length > 45) {
                        $smalls[i].innerHTML = 'Complete con nombre, marca, etc hasta 45 caracteres.';
                        validationErrors = true;
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    }
                break;
                case 'price':
                    if ($inputs[i].value.trim() == '' || !Number($inputs[i].value.trim())) {
                        $smalls[i].innerHTML = 'Es necesario un valor numérico para el precio mayor que 0.';
                        validationErrors = true;
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    }
                break;
                case 'discount':
                    if (!Number($inputs[i].value.trim())) {
                        $smalls[i].innerHTML = 'Ingrese un valor numérico o puede dejar el campo vacío.';
                        validationErrors = true;
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    }
                break;
                case 'description':
                    if ($inputs[i].value.trim() == '' || ($inputs[i].value.trim()).length > 255) {
                        $smalls[i].innerHTML = 'Incluya una descripción hasta 255 caracteres.';
                        validationErrors = true;
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    }
                break;
                case 'category':
                    if (!$inputs[i].value) {
                        $smalls[i].innerHTML = 'Debe elejir una categoría.';
                        validationErrors = true;
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    }
                break;
                case 'subcategory':
                    if (!$inputs[i].value) {
                        $smalls[i].innerHTML = 'Debe elejir una subcategoría.';
                        validationErrors = true;
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    }
                break;
                case 'image':
                    if (regExImage.exec($inputs[i].value)) {
                        const file = $inputs[i].files[0];
                        const imagen = URL.createObjectURL(file);
                        const img = document.querySelector('#imagen-previa');
                        img.src = imagen;
                        $smalls[i].innerHTML = '';
                    } else {
                        const img = document.querySelector('#imagen-previa');
                        img.src = "";
                        $smalls[i].innerHTML = 'Solo extensiones .jpg .jpeg .png .webp'
                    }
                break;
                case 'stock':
                    if ($inputs[i].value.trim() == '' || !Number($inputs[i].value.trim())) {
                        $smalls[i].innerHTML = 'Debe ingresar cantidad de unidades mayores a 0.';
                        validationErrors = true;
                    } else {
                        $smalls[i].innerHTML = '';
                        validationErrors = false;
                    }
                break;
            }
        });    
    }

    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        let error = false;
        for (let i = 0; i < $inputs.length; i++) {
            if ($inputs[i].name != 'discount' && $inputs[i].type != 'file' && $inputs[i].value.trim() == '') {
                $smalls[i].innerHTML = 'Este dato es obligatorio.';
                error = true;
            }
        }

        if (!error && !validationErrors) {
            $form.submit();
        }
    });
});