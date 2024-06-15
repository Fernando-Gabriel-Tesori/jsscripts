/* 

operadores logico

&& -> E -> Pessoa Exigente / obdiente
 true && true = true
 true && false = false
 false && false = false
 
 || -> ou -> tanto faz
    true && true = true
    true && false = true
    false && false == false
    
    -> negação 
    !true = false
    !false = true*/

  console.log(!false)
  //inverte para true

  console.log(!true)
  //inversão de valores

  const digitarASenha = false
  const digitarOToken = false
  const numeroDaConta = false

  if (digitarASenha || digitarOToken || numeroDaConta) {
    console.log("logado com sucesso");
} else {
    console.log("autenticação Falhou");
}
//não loga
const digitarASenha1 = false
  const digitarOToken1 = true
  const numeroDaConta1 = false

  if (digitarASenha1 || digitarOToken1 || numeroDaConta1) {
    console.log("logado com sucesso");
} else {
    console.log("autenticação Falhou");
}
//loga
const digitarASenha2 = false
  const digitarOToken2 = true
  const numeroDaConta2 = true

  if (digitarASenha2 || digitarOToken2 || numeroDaConta2) {
    console.log("logado com sucesso");
} else {
    console.log("autenticação Falhou");
}
//loga
/* 

operador | ou  

*/


