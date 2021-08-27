'use strict';

const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');

textInput.addEventListener('keydown', e =>{
    let text = textInput.value.trim();
    if(text === '' || e.key !== 'Enter') {
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    li.classList.add('list-item');
    span.textContent = text;
    span.classList.add('todo-list');


    button.textContent = 'delete';
    button.classList.add('delete-button');
    button.addEventListener('click', e => {
        todoList.removeChild(e.target.closest('li'));
    })

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    textInput.key = '';
});

//enter押したら
textInput.enterKeyHint = () => {
    let getLocalstorage = localStorage.getItem('text-input');
    if(getLocalstorage == null){ 
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalstorage);
    }
    listArr.push(text);
    localStorage.setItem("text-input", JSON.stringify(listArr));
}


