const URL_LOGIN = "http://localhost:3000/login"

const login = async () => {
  const name = document.getElementById("myName").value
  const password = document.getElementById("myPassword").value

  const resp = await fetch(URL_LOGIN, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: name,
      password: password
    })
  })

  if(resp.status === 401){
    alert("name or password is wrong")
  }else{
    alert("logged in")
    window.location.href = `/home`
  }
}