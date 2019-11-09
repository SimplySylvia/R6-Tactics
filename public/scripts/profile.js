const setProfile = res => {
  $('#api_key').append(`<code>${res.data.api_key}</code>`);
  res.data.archive_keys.forEach(key => {
    const template = `<section class="doccode archive"><code>${key}</code></section>`;
    $('#archived-keys').append(template);
  });
};

$.ajax({
  type: 'GET',
  url: '/api/v1/auth',
  credentials: 'include',
  success: setProfile,
  error: err => console.log(err)
});

const setKey = res => {
  console.log(res);
  $('#api_key')
    .fadeOut()
    .empty()
    .append(`<code>${res.data.api_key}</code>`)
    .fadeIn();
};

const newKey = () => {
  $.ajax({
    type: 'PATCH',
    url: '/api/v1/auth/key',
    credentials: 'include',
    success: setKey,
    error: err => console.log(err)
  });
};

$('#request-key').on('click', newKey);

$('.ui.accordion').accordion();
