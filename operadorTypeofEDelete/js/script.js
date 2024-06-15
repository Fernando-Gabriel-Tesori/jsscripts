/*
Operadores type of e Delete

typeof -> Tipo de dado
delete 

*/
//o type of fala o que aquela variavel faz

const myObject = {
    name: "fernando",
    age: 19,
    address: "Secret"
}
delete myObject.address

console.log(myObject)
//deletou a rua