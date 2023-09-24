var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hora`)
if(hora <=1 || hora <= 4){
  console.log('Boa madrugada!')
}
else if (hora < 12){
  console.log('Bom dia!')
} else if (hora <= 18){
  console.log('Boa tarde!')
}else if(hora <=24) {
  console.log('Boa noite!')
}else {
  console.log('Não existe essa hora, tenta de novo!')
}
