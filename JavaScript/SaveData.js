let personas = [];

let users = JSON.parse(localStorage.getItem('users')) || [];

function registerUser() {
  let username = document.getElementById('username').value.trim();
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

  if (!username || !password || !confirmPassword) {
    alert('Todos los campos son obligatorios');
    return;
  }

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  if (users.some(u => u.username === username)) {
    alert('El usuario ya existe');
    return;
  }

  if (users.some(u => u.ADMIN === password)) {
    alert('La contraseña no puede ser "ADMIN"');
    return;
  }

  users.push({username, password});
  localStorage.setItem('users', JSON.stringify(users));
  alert('Usuario registrado correctamente');
  window.location.href = 'login.html';
}

function loginUser() {
  let username = document.getElementById('loginUsername').value.trim();
  let password = document.getElementById('loginPassword').value;

  if (!username || !password) {
    alert('Usuario y contraseña requeridos');
    return;
  }

  let user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert('Login exitoso');
    window.location.href = 'Principal.html';
  } else {
    alert('Credenciales inválidas');
  }
}

function loginAdmin() {
  let usernameA = document.getElementById('AdminUsername').value.trim();
  let passwordA = document.getElementById('AdminPassword').value;

  if (usernameA === "ADMIN" && passwordA === "ADMIN") {
    alert('Login exitoso');
    window.location.href = 'CRUD.html';
  } else {
    alert("Cuenta o contraseña ingresadas incorrectamente");
  }
}