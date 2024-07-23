const itemLabel = document.querySelector(".label-item");
const itemContainer = document.getElementById('item');
const itemButton = document.querySelector('.submitItem');
const outputContainer = document.getElementById('output');
const toDoList = [];

document.querySelector('.submitChoice').addEventListener('click', () => {
    let choiceValue = document.getElementById('choice').value.toLowerCase();

    // Clear previous wrong choice message if any
    const existingMessage = document.getElementById('wrongChoiceMessage');
    if (existingMessage) {
        existingMessage.remove();
    }

    if (choiceValue === 'list') {
        let op = "<br>**********<br><ol>";
        for (let item of toDoList) {
            op += `<li>${item}</li>`;
        }
        op += "</ol><br>**********<br>";
        outputContainer.innerHTML = op;
        itemContainer.style.display = 'none';
        itemButton.style.display = 'none';
        return;
    }

    if (choiceValue !== "add" && choiceValue !== "delete") {
        const p = document.createElement('p');
        p.id = 'wrongChoiceMessage';
        p.innerHTML = 'Wrong Choice Entered. Please Enter a valid choice!';
        outputContainer.appendChild(p);
        return;
        
    }

    itemLabel.innerHTML = `Enter item to ${choiceValue}`;
    itemContainer.placeholder = `Enter item to ${choiceValue}`;
    itemButton.innerHTML = `${choiceValue.toUpperCase()} ITEM`;
    itemContainer.style.display = 'block';
    itemButton.style.display = 'block';

    itemButton.onclick = () => {
        if (choiceValue === "add") {
            toDoList.push(itemContainer.value);
        } else if (choiceValue === "delete") {
            const index = toDoList.indexOf(itemContainer.value);
            if (index !== -1) {
                toDoList.splice(index, 1);
            } else {
                alert('Item not found in the list.');
            }
        }
        itemContainer.value = ''; // Clear input field after operation
       
    };
});

