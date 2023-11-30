nality
    removeButton.addEventListener('click', function (event) {
        const btn = event.target;
        const parent = btn.parentNode;
        parent.remove();
    });

    newListItem.appendChild(removeButton);
    list.appendChild(newListItem);
    input.value = '';
    input.focus();//Look for what a user types
const list = document.querySelector('#list');
const form = document.querySelector('#addToList');
const input = document.querySelector('#itemToAdd');

//Watch the form for submission, prevent the form from doing its default action
form.addEventListener('submit', function (event) {
    //Prevent the form from default submit action
    event.preventDefault();

    //Create an element for the new list item
    const newListItem = document.createElement('li');
    list.appendChild(newListItem);

    //Take the value the user entered from the input
    const itemToAdd = input.value;

    //Create the <span> inside the list item
    const newTextSpan = document.createElement('span');
    newTextSpan.textContent = itemToAdd;

    //create a space between  the text and the remove button
    newTextSpan.innerHTML += '&nbsp;';
    newListItem.appendChild(newTextSpan);

    //Create the remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "remove";
    newListItem.appendChild(removeButton);

    //Create the remove button function

});