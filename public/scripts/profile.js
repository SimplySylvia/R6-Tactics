$.ajax({
  type: 'GET',
  url: '/api/v1/auth',
  credentials: 'include',
  success: res => console.log(res),
  error: err => console.log(err)
});
