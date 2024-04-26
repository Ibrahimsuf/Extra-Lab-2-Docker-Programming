function isPasswordValid() {
  const password = document.querySelector('#password').value;
  return password.length >= 8;
}

function doPasswordsMatch() {
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirmPassword').value;
  return password === confirmPassword;
}

function showMessageforPassword() {
  if (isPasswordValid()) {
    document.querySelector('#message').style.display = 'block';
  }
  else {
    document.querySelector('#message').style.display = 'none';
  }
  if(doPasswordsMatch() && isPasswordValid()) {
    document.querySelector('#confirmMessage').style.display = 'block';
  }
  else {
    document.querySelector('#confirmMessage').style.display = 'none';
  }
}

function showMessageforConfirm() {
  if(doPasswordsMatch() && isPasswordValid()) {
    document.querySelector('#confirmMessage').style.display = 'block';
  }
  else {
    document.querySelector('#confirmMessage').style.display = 'none';
  }
}


showMessageforPassword();
showMessageforConfirm();
document.querySelector('#password').addEventListener('input', showMessageforPassword);
document.querySelector('#confirmPassword').addEventListener('input', showMessageforConfirm);

