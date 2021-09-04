const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.data_container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    // Create Todo Div
    createDiv(itemName){
        let input = document.createElement('input');
        input.value=itemName;
        input.type='text';
        input.disabled=true;
        input.classList.add('item-input');

        let itembox = document.createElement('div');
        itembox.classList.add('item');

        // Edit ToDo
        let editButton = document.createElement('button');
        editButton.innerHTML="Edit";
        editButton.classList.add('editButton');

        // Remove ToDo
        let removeButton=document.createElement('button');
        removeButton.innerHTML="Remove";
        removeButton.classList.add('removeButton');

        container.appendChild(itembox);
        itembox.appendChild(input);
        itembox.appendChild(editButton);
        itembox.appendChild(removeButton);

        editButton.addEventListener('click',()=> this.edit(input))
        removeButton.addEventListener('click',()=> this.remove(itembox))
    }
    edit(input){
        input.disabled=!input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}
function check (){
    if (input.value !=" "){
        new item(input.value);
        input.value=" ";
    }
}
addButton.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
    if (e.which == 13){
        check();
    }
});