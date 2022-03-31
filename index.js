//= TO DO List para visitar provincias en Argentina

function solicitarNombre() {
    let nombreUsuario = prompt("Ingrese su nombre, por favor: ");
    alert("Bienvenidx " + nombreUsuario + " a nuestro sitio web. Esperamos que tu visita sea placentera :)");
}

solicitarNombre();

function solicitarDestino(){
    let destino = prompt("¿A cuál provincia de Argentina tienes pensado viajar?"); 
    alert("Usted ha seleccionado como su próximo destino la provincia de " + destino);
}

solicitarDestino();


//' método constructor:
class Provincia{
    constructor(nombre, capital, ubicacion) {
    this.nombre = nombre;
    this.capital = capital;
    this.ubicacion = ubicacion;
}

}

//objetos:

const buenosAires = new Provincia("Buenos Aires", "La Plata", "Centro-Este de Argentina");
const catamarca = new Provincia("Catamarca", "San Fernando del Valle de Catamarca", "Noroeste de Argentina");
const chaco = new Provincia("Chaco", "Resistencia", "Norte de Argentina");
const chubut = new Provincia("Chubut", "Rawson", "Sur de Argentina");
const cordoba = new Provincia("Córdoba", "Córdoba", "Centro de Argentina");
const corrientes = new Provincia("Corrientes", "Corrientes", "Noreste de Argentina");
const entreRios = new Provincia("Entre Ríos", "Paraná", "Centro de Argentina");
const formosa = new Provincia("Formosa", "Formosa", "Noreste de Argentina");
const jujuy = new Provincia("Jujuy", "San Salvador de Jujuy", "Noroeste de Argentina");
const laPampa = new Provincia("La Pampa", "Santa Rosa", "Centro de Argentina");
const laRioja = new Provincia("La Rioja", "La Rioja", "Noroeste de Argentina");
const mendoza = new Provincia("Mendoza", "Mendoza", "Centro-Oeste de Argentina");
const misiones = new Provincia("Misiones", "Posadas", "Noreste de Argentina");
const neuquen = new Provincia("Neuquén", "Neuquén", "Suroeste de Argentina");
const rioNegro = new Provincia("Río Negro", "Viedma", "Centro-Sur de Argentina");
const salta = new Provincia("Salta", "Salta", "Noroeste de Argentina");
const sanJuan = new Provincia("San Juan", "San Juan", "Centro-Oeste de Argentina");
const sanLuis = new Provincia("San Luis", "San Luis", "Centro de Argentina");
const santaCruz = new Provincia("Santa Cruz", "Río Gallegos", "Sur de Argentina");
const santaFe = new Provincia("Santa Fe", "Santa Fe de la Vera Cruz", "Noreste de Argentina");
const santiagoDelEstero = new Provincia("Santiago del Estero", "Santiago del Estero", "Norte de Argentina");
const tierraDelFuego = new Provincia("Tierra del Fuego", "Ushuaia", "Sur de Argentina");
const tucuman = new Provincia("Tucumán", "San Miguel de Tucumán", "Noroeste de Argentina");



//' array:
const provincias = [buenosAires, catamarca, chaco, chubut, cordoba, corrientes, entreRios, formosa, jujuy, laPampa, laRioja, mendoza, misiones, neuquen, rioNegro, salta, sanJuan, sanLuis, santaCruz, santaFe, santiagoDelEstero, tierraDelFuego, tucuman];
console.log(provincias); 

//' find: :
let busqueda = provincias.find((el) => el === mendoza );
console.log(busqueda); 

//' filter: 
let resultadoUbicacion = provincias.filter((ubicacion) => ubicacion.ubicacion.includes("Noreste de Argentina"));
console.log(resultadoUbicacion);