export function isValidateRegister({email, password, repeatPassword, setError, registerUser}) {
    const recExp = /^(?=.*[a-zA-Z])(?=.*\d).+/
    if (email=== "" || password==="") {
      setError('Укажите почту/пароль')
      return false
    }
    if (email.length < 5) {
      setError('Слишком короткая почта или имя')
      return false
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return false
    }
    if (password.length < 8 || repeatPassword.length < 8) {
      setError('Пароль должен содержать более 4 символов')
      return false
    }
    if (password.includes('123456')) {
      setError('Пароль слишком распространен')
      return false
    }
    if (!recExp.test(password)) {
      setError('Пароль должен состоять не только из цифр')
      return false
    }
    try {
      registerUser({ email, password })
      return true
    } catch (error) {
      setError('Пользователь с таким именем уже существует')
      return false
    }
  }

  export function isValidateFormLogin ({email, password, setError}) {
    if (email === "" || password === "") {
      setError('Укажите почту/пароль');
      return false;
    }
    if (email.length < 5) {
      setError('Слишком короткая почта или имя');
      return false;
    }
      return true;
  }