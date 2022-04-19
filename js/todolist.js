// Actualizar lista to do
 
 const agregarAToDoList = () =>{ 

    tablaToDo.innerHTML = "";
    let tr;
    

    todoList.forEach((elemento, i) => {
        tr = document.createElement('tr');
        tr.setAttribute("id", i);
        if(elemento.status === 'Realizado') tr.setAttribute("class",'ready');

        tr.innerHTML = `
                        <td>${elemento.actividad}</td>
                        <td>${elemento.fecha}</td>
                        <td>${elemento.status}</td>
                        `;

    
    tablaToDo.appendChild(tr);
    });

}





let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
let todoListDeleted = JSON.parse(localStorage.getItem("todoListDeleted")) || [];

/*if(todoList.length > 0) agregarAToDoList();*/

//* uso de operador AND 
todoList.length > 0 && agregarAToDoList();

    











