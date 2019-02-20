document.addEventListener('DOMContentLoaded',function(){

    //Eliminar tarea
    const list = document.querySelector('#task-list ul');
    list.addEventListener('click',function (e){
        if(e.target.className == 'delete'){ //Cuando el objetivo del click es un elemento de clase delete
            const li = e.target.parentElement; // Obtenemos el li que contiene el elemento
            li.parentNode.removeChild(li); // Eliminas el padre osea el li
        }
    });






});

