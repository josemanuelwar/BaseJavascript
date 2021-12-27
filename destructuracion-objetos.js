const deadpool ={
	Nombre:"wede",
	Apellido:"winston",
	Poder:"Regeneracion",
	getNombre(){
		return `${this.Nombre} ${this.Apellido}`
	}
}

console.log(deadpool.getNombre())

//const nombre = deadpool.Nombre;
//const Apellido = deadpool.Apellido
//const poder = deapool.Poder


const {Nombre,Apellido,Poder} = deadpool


console.log(Nombre, Apellido,Poder)



function imprimirHeroe({Nombre, Apellido,Poder,edad=0}){
	console.log(Nombre,Apellido,Poder,edad)
}


imprimirHeroe(deadpool)

/*destructuracion de objetos*/


const heroes = ['Deadpool','Superman','Batman']

const [h1,h2,h3]= heroes

console.log(h1,h2,h3)
