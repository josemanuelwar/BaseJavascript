const getUsuarioByID=(id, callbacks)=>{

	const usuario = {
		id,
		Nombre:"manuel"
	}

	setTimeout(()=>{
		callbacks(usuario)
	},1500)
}

getUsuarioByID(10,(usuario)=>{
	console.log(usuario)
})


