// this copy -> `node index.js` in the terminal

function getLogicRandom() {
  
  let listaAsignacion = []

  //aqui se modificapara aplicar un margen de error;
  let countA = 41;
  let countB = 41;
  const numeroParticipantes = 82;
  
  //se llenan todos los datos iniciales
  for (let i = 0; i < numeroParticipantes; i++){
    listaAsignacion.push({id: i+1, assig: 'NN'});
  }
  
  //logica de Asignacion 
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
  
  const totalA = listaAsignacion.filter(data => data.assig === 'A');
  const totalB = listaAsignacion.filter(data => data.assig === 'B');
  return {list: listaAsignacion, a: totalA.length, b: totalB.length}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let result = {list: [], a: 0, b: 0};

while (result.a !== 41 && result.b !== 41){
  result = getLogicRandom();
  console.log(result.a)
  console.log(result.b)
}


//Tarea hay un bug, ojo
/*
  ~/projects/node-haut8i
  ❯ node index
  Total A:  39
  Total B:  39
*/



console.log('Total A: ', result.a);
console.log('Total B: ', result.b);
console.log(result.list.map(d => `${d.assig}`));