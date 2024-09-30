const selectBox = document.querySelector('.select-box');
const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');

selectBox.addEventListener('click', () => {
    selectBox.classList.toggle('active');
});

optionsList.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerHTML = option.innerHTML;
        selectBox.classList.remove('active');
    });
});
