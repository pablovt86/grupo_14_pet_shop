window.addEventListener('load', () => {
    $form = document.querySelector('.formFind');
    $input = document.querySelector('.inputFind')

    $form.addEventListener('submit', (event) => {
        event.preventDefault();
        if ($input.value) {
            $form.submit();
        }
    }); 
});