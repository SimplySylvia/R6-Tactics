const modal = type => {
  $(`.ui.modal.${type}`)
    .modal({
      blurring: true
    })
    .modal('show');
};

$('#register').on('click', () => modal('register'));

$('#login').on('click', () => modal('login'));

const handleRegister = event => {
  const data = {
    email: $('#register-email').val(),
    password: $('#register-password').val(),
    password2: $('#register-password2').val()
  };
  $.ajax({
    type: 'POST',
    url: '/api/v1/auth/register',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: res => {
      window.localStorage.id = res.data;
      window.location = '/profile';
    },
    error: err => console.log(err.responseJSON)
  });
};

$('#register-submit').on('click', handleRegister);

const handleLogin = event => {
  const data = {
    email: $('#login-email').val(),
    password: $('#login-password').val()
  };
  $.ajax({
    type: 'POST',
    url: '/api/v1/auth/login',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: res => {
      window.localStorage.id = res.data;
      window.location = '/profile';
    },
    error: err => console.log(err.responseJSON)
  });
};

$('#login-submit').on('click', handleLogin);

if (window.localStorage.id) {
  const profileTag = `<a href="/profile" class="item">
        Account
      </a>
      <div class="item">
          <div id="logout" class="ui button">Log Out</div>
        </div>
      `;
  $('.right')
    .empty()
    .append(profileTag);
}

const logout = () => {
  $.ajax({
    type: 'DELETE',
    url: '/api/v1/auth/logout',
    success: res => {
      window.localStorage.clear();
      window.location = '/';
    },
    error: err => console.log(err)
  });
};

$('#logout').on('click', logout);
