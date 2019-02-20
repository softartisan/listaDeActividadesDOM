document.addEventListener('DOMContentLoaded',function(){

    //Eliminar tarea
    const list = document.querySelector('#task-list ul');
    list.addEventListener('click',function (e){
        if(e.target.className == 'delete'){ //Cuando el objetivo del click es un elemento de clase delete
            const li = e.target.parentElement; // Obtenemos el li que contiene el elemento
            li.parentNode.removeChild(li); // Eliminas el padre osea el li que lo contiene
        }
    });

    //Agregar tarea
    const addForm = document.forms['add-task'];
    addForm.addEventListener('submit',function(e){
        
        e.preventDefault(); // Prevenimos que el boton haga el submit por defecto
        const value = addForm.querySelector('input[type="text"]').value; 
        console.log(value);
        
        //Crear elementos
        const li = document.createElement('li');
        const taskName = document.createElement('span');
        const deleteButton = document.createElement('span');
    
        //Agregar Contenido
        deleteButton.textContent='Eliminar';
        taskName.textContent = value;

        //Limpiar valor del input
        addForm.querySelector('input[type="text"]').value = '';
    
        //Agregar clases a los elementos
        taskName.classList.add('name');
        deleteButton.classList.add('delete');
    
        //Añadir al DOM
        li.appendChild(taskName);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });




});

