document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-answer');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.parentNode.nextElementSibling;

            if (answer.style.display === 'block' || answer.style.display === '') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
