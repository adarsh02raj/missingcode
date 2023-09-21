
const input = document.getElementById('input'); 
const addBtn = document.getElementById('add'); 
const taskList = document.getElementById('lists'); 

function addTask() {
    const taskText = input.value.trim();
    if (taskText === '') {
        alert('Please enter a task.'); 
        return; 
    }

   
    const listItem = document.createElement('li');
    listItem.className = 'checklists'; 

    
    const label = document.createElement('label');
    label.textContent = taskText; 

    
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    input.value = '';
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask(); 
    }
});



