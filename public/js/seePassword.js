let eye = document.querySelectorAll('.iconSee');
let input = document.querySelectorAll('.pass');

for (let i = 0; i < eye.length; i++) {
    eye[i].addEventListener('click', () => {

        if (input[i].type === 'password') {
            eye[i].classList.remove('fa-eye');
            eye[i].classList.add('fa-eye-slash');
            input[i].type = 'text';
        } else {
            eye[i].classList.remove('fa-eye-slash');
            eye[i].classList.add('fa-eye');
            input[i].type = 'password';
        }
    });
}
