document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const successMessage = document.getElementById('successMessage');

    if (name === '' || email === '' || message === '') {
        alert('請填寫所有欄位');
        return;
    }

    successMessage.classList.remove('hidden');
    successMessage.classList.add('block');

    // 清空表單
    document.getElementById('contactForm').reset();
});