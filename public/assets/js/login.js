document.getElementById('login').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/users/login', {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  })
  //now we get the token
  .then(({ data: token}) => {
    if(token) {
      localStorage.setItem('token', token)
      window.location = '/'
    } else {
      alert('Invalid username or password')
    }
  })
  .catch(err => console.log(err))
})

document.getElementById('register').addEventListener('click', event => {
  window.location = '/register'
})