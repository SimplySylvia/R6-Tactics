$(document).ready(() => {
  $.ajax({
    method: 'GET',
    url: '/api/v1/',
    success: handleSuccess,
    error: handleError,
    headers: {
      api_key: 'c3VwZXJfc2VjcmV0X3Bhc3Njb2Rl'
    }
  });

  $('.requestBar').on('submit', e => {
    e.preventDefault();
    let term = $('.searchinput').val();

    $.ajax({
      method: 'GET',
      url: `/api/v1/${term}`,
      success: handleSuccess,
      error: handleError,
      headers: {
        api_key: 'c3VwZXJfc2VjcmV0X3Bhc3Njb2Rl'
      }
    });
  });
});
