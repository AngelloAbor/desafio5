const tareaJson = [];
const tareaList = document.querySelector("#tareaList")
const nuevaTarea = document.querySelector("#nuevaTarea")
const btnAdd = document.querySelector("#btnAdd")
const total = document.querySelector("#total")
const listo = document.querySelector("#listo")

const renderTask =()=>{
	let contDone = 0 // Variable para contar cuantas tareas estan realizadas
	let html = ""
	if(tareaJson.length>0){
		html = `<thead>
						<th>ID</th>
						<th>Tarea</th>
						<th></th>
						<th></th>
					</thead>
					<tbody>`
		for (tarea of tareaJson) {
			if(tarea.state){
				contDone++
				html += `<tr><td>${tarea.id}</td><td class="destacar">${tarea.description}</td><td><input type="checkbox" class="checkbox" onclick="changeDone(${tarea.id})" id="taskCheck" checked></td><td><img onclick="deleteTask(${tarea.id})" src="./assets/img/delete.png" alt="Eliminar"></td></tr>`
			}else{
				html += `<tr><td>${tarea.id}</td><td>${tarea.description}</td><td><input type="checkbox" class="checkbox" onclick="changeDone(${tarea.id})" id="taskCheck"></td><td><img onclick="deleteTask(${tarea.id})" src="./assets/img/delete.png" alt="Eliminar"></td></tr>`
			}
		}
		html += `</tbody>`
	}
	tareasList.innerHTML = html
	total.innerHTML = tareaJson.length
	done.innerHTML = contDone
	nuevaTarea.focus()
}
const addTask = (tarea) =>{
	/* genera un numero random hasta que no exista en el array */
	let idRand = Math.floor(Math.random()*100)
	const ids = tareaJson.map(tarea => tarea.id)
	while(ids.includes(idRand) === true){ 
		idRand = Math.floor(Math.random()*100)
	}
	tareaJson.push({id: idRand, description: tarea, state: 0})
}
const borrarTarea =(id)=>{
	const indexTarea = taskJson.findIndex( searchIndex => searchIndex.id === id)
	tareaJson.splice(indexTarea, 1)
	renderTask()
}

const changeDone =(id)=>{
	const indexTask = taskJson.findIndex( searchIndex => searchIndex.id === id)
	if(taskJson[indexTask].state === 0){
		taskJson.splice(indexTask, 1 ,{id: taskJson[indexTask].id, description: taskJson[indexTask].description, state: 1})
	}else{
		taskJson.splice(indexTask, 1 ,{id: taskJson[indexTask].id, description: taskJson[indexTask].description, state: 0})
	}
	renderTask()
}
btnAdd.addEventListener("click", () => {
	if(NuevaTarea.value){
		addTask(NuevaTarea.value)
		NuevaTarea.value = ""
		renderTask()
	}else{
		alert("Debe ingresar una tarea")
		NuevaTarea.focus()
	}
})