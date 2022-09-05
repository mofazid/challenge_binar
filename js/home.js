const handleInsertData = async () =>{
  let inputName = document.getElementById("inputName").value
  let inputPassword = document.getElementById("inputPassword").value
  let inputAge = document.getElementById("inputAge").value
  let inputCity = document.getElementById("inputCity").value
  let inputGame = document.getElementById("inputGame").value
  let inputWins = document.getElementById("inputWins").value

  //Post user
  const resp = await fetch('http://localhost:3000/home', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: inputName,
      password: inputPassword,
      age: inputAge,
      city: inputCity,
      game: inputGame,
      wins: inputWins
    })
  })
  const data = await resp.json()
  console.log(data)
  location.reload()
}

const handleDeleteData = async (usersid) => {
  let con = confirm('are your sure?')
  if (con) {
 
    await fetch(`http://localhost:3000/home/${usersid}`, {
      method: 'DELETE'
    })

    location.reload()
  }
}

const handleUpdateData = (id) => {

  const trEl = document.getElementById(id)

  document.getElementById("inputName").value = trEl.children[1].innerText
  document.getElementById("inputPassword").value  = trEl.children[2].innerText
  document.getElementById("inputAge").value   = trEl.children[3].innerText
  document.getElementById("inputCity").value  = trEl.children[4].innerText
  document.getElementById("inputGame").value  = trEl.children[5].innerText
  document.getElementById("inputWins").value  = trEl.children[6].innerText

  document.getElementById('btnRegister').disabled = true
  document.getElementById('btnUpdate').disabled = false
  document.getElementById('btnUpdate').setAttribute('onclick', `handleSubmitUpdate(${id})`)
}

const handleSubmitUpdate = async (id) => {
  let inputName = document.getElementById("inputName").value
  let inputPassword = document.getElementById("inputPassword").value
  let inputAge = document.getElementById("inputAge").value
  let inputCity = document.getElementById("inputCity").value
  let inputGame = document.getElementById("inputGame").value
  let inputWins = document.getElementById("inputWins").value

  await fetch(`http://localhost:3000/home/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: inputName,
      password: inputPassword,
      age: inputAge,
      city: inputCity,
      game: inputGame,
      wins: inputWins
    })
  })

  location.reload()
}