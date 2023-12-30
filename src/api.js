const baseURL = 'http://localhost:8090'

export async function getSignIn(email, password) {
  const response = await fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Ошибка авторизации')
    } else if (response.status === 422) {
      throw new Error('Невалидный email')
    } else {
      throw new Error('Произошла ошибка')
    }
  }

  const responseData = await response.json()
  return responseData
}

export async function getSignUp(email, password, name, surname, city) {
  const response = await fetch(`${baseURL}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      surname: surname,
      city: city,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('Такой пользователь существует')
    } else if (response.status === 422) {
      throw new Error('Невалидный email')
    } else {
      throw new Error('Произошла ошибка')
    }
  }

  const responseData = await response.json()
  return responseData
}
