function newItem() {

    //1. Explanation: Adding a new item to the list of items:
    let li = document.createElement('li');
    let inputValue = document.getElementById('input').value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue === '') {
        alert('An empty item makes for an empty list!');
    } else {
        let list = document.querySelector('#list');
        list.appendChild(li);
    }

    //2. Explanation: Crossing out an item from the list of items:
    function crossOut() {
        li.classList.toggle('strike');
    }

    li.addEventListener('dblclick', crossOut);

    //3(i). Explanation: Adding the delete button 'X':
    let deleteButton = document.createElement('deleteButton');
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', deleteListItem);

    //3(ii). Explanation: Adding the class 'delete' (display: none) from the css:
    function deleteListItem() {
        li.classList.add('delete');
    }

    // 4. Reordering the items: 
    $('#list').sortable();
}