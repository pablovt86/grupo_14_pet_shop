const input = document.getElementById('image-create-product');

input.addEventListener('change', () => {
    if (input.files) {
        const file = input.files[0];
        const imagen = URL.createObjectURL(file);
        const img = document.getElementById('imagen-previa');
        img.src = imagen;
    }
});
