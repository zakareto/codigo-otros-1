const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//'name' no tiene el punto que referencia la clase
const $b = document.querySelector('.blog');//'blog' es una clase asi que debe llevar . no el # que se usa para id
const $l = document.querySelector('.location');//No existe nada con la clase location

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); //Faltaba agregar el modificador async a la funcion
  const data = await response.json();//Faltaba declarar data
  console.log(response);//Data no esta definido en ninguna parte
  $n.textContent = `${data.name}`;//Deben ser backticks ` no '
  $b.textContent = `${data.blog}`;//Deben ser backticks ` no '
  $l.textContent = `${data.location}`;//Deben ser backticks ` no '
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`//Le falta el signo de pesos
}

displayUser('stolinski').catch(handleError);