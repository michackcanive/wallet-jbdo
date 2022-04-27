
export function emailValidator(numero) {
  const re = /\S+@\S+\.\S+/
  if (!numero) return ("Informe o seu número de conta.")
  //if (!re.test(email)) return ('Ups enforme uma email valido')
  return ''
}
