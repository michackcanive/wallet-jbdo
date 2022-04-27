export function passwordValidator(password) {
  if (!password) return "A sua senha esta vazio"
  if (password.length < 4) return 'A sua senha deve conter mais de 4 caracteres'
  return ''
}
