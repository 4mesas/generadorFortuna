const a = new Aventura('es');

let h1;

async function setup() {
  noCanvas();
  createButton("Predecir tu fortuna").parent("#texto").mouseClicked(generar);
  h1 = createElement("p","").parent("#texto")
  createDiv("").id("contenedor-igrama").parent("#imagen");
  const igramatica = await a.cargarJSON("./modelo.json");
  a.fijarIgrama(igramatica);
  await generar();  
}

async function generar() {
  const loading = createDiv("CARGANDO...").parent("#contenedor-igrama");
  
  select("#contenedor-igrama").remove();
  createDiv("").id("contenedor-igrama").parent("#imagen");
  
  
  const capas = await a.expandirIgrama('base');
  
  const texto = a.textoIgrama(capas);
  h1.html(texto);
  a.mostrarIgrama(capas, 'png', 'contenedor-igrama');

  loading.remove();
}

