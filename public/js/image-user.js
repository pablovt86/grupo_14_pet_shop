const input = document.getElementById('avatar');

input.addEventListener('change', () => {
    if (input.files) {
        const file = input.files[0];
        const imagen = URL.createObjectURL(file);
        const img = document.getElementById('user-profile');
        img.src = imagen;
    }
});
