
  const idInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('#password');
  const submitBtn = document.querySelector('.submit-btn');
  const togglePassword = document.querySelector('.toggle-password');

  togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.textContent = type === 'password' ? '' : '';
  });

  function toggleButton() {
    if (idInput.value.trim() && passwordInput.value.trim()) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  idInput.addEventListener('input', toggleButton);
  passwordInput.addEventListener('input', toggleButton);

  submitBtn.addEventListener('click', () => {
    const id = idInput.value.trim();
    const password = passwordInput.value.trim();

    if (id === 'ibrohim' && password === '33333') {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'home.html'; 
    } else {
      alert('Login yoki parol notogri');
    }
  });

  toggleButton();
  console.warn("ID ibrohim, Parol 33333");
  
