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

    //Escondes tareas
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change',function(e){
        if(hideBox.checked){
            list.style.display = 'none';
        }
        else{
            list.style.display = 'initial';
        }
    });

    //Buscar tarea
    const searchBar = document.forms['search-tasks'].querySelector('input');
    
    searchBar.addEventListener('keyup',function (e){
        const term = e.target.value.toLowerCase();
        const tasks = list.getElementsByTagName('li');
    
        Array.from(tasks).forEach(function(task){
            const name = task.firstElementChild.textContent;
            if(name.toLowerCase().indexOf(term) != -1){ 
                //Si lo que se escribe no esta presente en el principio del nombre de la tarea se esconde el li
                task.style.display = 'block';
            }
            else{
                task.style.display = 'none';
            }
        });
    
    });


    //Contenido tabeado
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    
    tabs.addEventListener('click',function (e){
        if(e.target.tagName == 'LI'){
            const targetPanel = document.querySelector(e.target.dataset.target);
            Array.from(panels).forEach(function (panel){
                if(panel == targetPanel){
                    panel.classList.add('active');
                }
                else{
                    panel.classList.remove('active');
                }
            });
        }
    });






});

