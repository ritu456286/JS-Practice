// let todo =[];
var checkbox = document.getElementsByClassName("checkbox");
const addElements= Array.from(document.querySelectorAll("li .add"));
const dltElements = document.querySelectorAll("li .delete");
var mylist = document.querySelectorAll(".my-list")[0];
addElements.forEach(addition => {
    addition.addEventListener("click", () => {

        const addItemForm = document.getElementById("addItemForm");

        addItemForm.style.display = "block";
        addItemForm.addEventListener("submit", (event) => {

            event.preventDefault();
            const newItemInput =  document.getElementById("newItemInput");
            var value = newItemInput.value.trim();
            
            if (value !==  ""){
                const newItem = document.createElement("li");
                newItem.className = "todoItem";
                newItem.innerHTML =`
                    <input type="checkbox" class="checkbox">
                    ${value}
                    <button><i class="fa-sharp fa-solid fa-xmark delete"></i></button>
                    <button><i class="fa-solid fa-plus add"></i></button>
                `;
                mylist.appendChild(newItem);
            } 
            
            newItemInput.value = '';
            addItemForm.style.display = 'none';
        });
    });
});
