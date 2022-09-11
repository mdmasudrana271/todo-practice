const getElement = id =>{
    const elementField = document.getElementById(id)
    const element = elementField.value;
    elementField.value = '';
    return element;
    
}

const handleSubmit = () =>{
    const todos = JSON.parse(localStorage.getItem("TODOS"));
    const element = getElement('todo-text');
    if(!todos){
        const todoList = [
            {
                title: element,
                completed:false,
            },
        ];
        console.log(todoList)
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    else{
        const todoList = [
            ...todos,
            {
                title: element,
                completed: false,
            },
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    render();
};


const render = () =>{
    const todos = JSON.parse(localStorage.getItem('TODOS'))
    const msg = document.getElementById('hidden-msg')
    if(todos.length === 0){
        msg.classList.remove('hidden',true)
    }
    // console.log(todos)
    const ul = document.getElementById("todo-list")
    ul.innerHTML = '';
    todos.forEach(item => {
        // console.log(item.title)
        const div = document.createElement('div')
        div.classList.add('py-2','flex','justify-between')
        // li.setAttribute('onclick','removeTodo()')
        // div.innerText = `${item.title}`;
        div.innerHTML=`
        <li>${item.title}</li>
        <button class="" onclick="removeTodo('${item.title}')">Remove</button>
        `;
        ul.appendChild(div)

    });
}
render();

const handleDelete = () =>{
    localStorage.removeItem('TODOS')
    render();
}
const getLocalStorageValue = () =>{
    const todos = localStorage.getItem('TODOS')
    const todo = JSON.parse(todos)
    // console.log(todo)
    return todo
  
}

// console.log(getLocalStorageValue())

const removeTodo =(item)=>{
    // console.log(item)
    const todosList = getLocalStorageValue ()
    todosList.splice(item,1)
    localStorage.setItem('TODOS',JSON.stringify(todosList))
    // console.log(todosList)
    render()
}