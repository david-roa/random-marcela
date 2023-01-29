// run `node index.js` in the terminal

let listaAsignacion = []

//aqui se modificapara aplicar un margen de error;
let countA = 41;
let countB = 41;
const numeroParticipantes = 82;

for (let i = 0; i < numeroParticipantes; i++){
  listaAsignacion.push({id: i+1, assig: 'NN'});
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < listaAsignacion.length; i++){
  const op = getRandomInt(2);
  if (op === 0 && countA !== 0){
    listaAsignacion[i].assig = 'A';
    countA = countA -1;
  } else {
    listaAsignacion[i].assig = 'B';
    countB = countB -1;
  }
}


console.log(listaAsignacion)