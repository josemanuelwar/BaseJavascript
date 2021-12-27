const empleados = [
	{
	  id:1,
	  nombre:'Fenado'
	},
	{
	  id:2,
	  nombre:'Linda'
	},
	{
	  id:3,
	  nombre:'karen'
	}

]

const salarios = [
	{
	  id:1,
	  salario:1000
	},
	{
	  id:2,
	  salario:1500
	}
]


const getEmpplados = (id,callback)=>{
	const empleado = empleados.find(e=>e.id == id)
	if(empleado){
	 callback(null,empleado)
	}else{
	   callback(`Emplado con el id ${id} no existe`)
	}
}

const id =10

getEmpplados(id,(err,empleado)=>{
	if(err){
	  return console.log(err)
	}
	console.log(empleado)
})


const getSalarios = (id,callback)=>{
	const salario= salarios.find(e=>e.id == id)?.salario
	if(salario){
	 callback(null,salario)
	}else{ callback(`El salario no existe este id ${id}`) }
}


getSalarios(id,(err,salario)=>{
	if(err){
	 return console.log(err)
	}
	console.log(salario)
})
