document.getElementById('login').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/users/login', {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  })
    .then(({ data: token }) => {
      if (token) {
        localStorage.setItem('token', token)
        window.location = '/home'
      } else {
        Swal.fire('Invalid username or password')
      }
    })
    .catch(err => console.error(err))
})

document.getElementById('register').addEventListener('click', event => {
  window.location = '/register'
})

