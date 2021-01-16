window.addEventListener('load',init);
function bindEvents(){
    document.querySelector('#add').addEventListener('click',add);

}
function init(){
    bindEvents();
    updateCount();
}

function updateCount(){
    document.querySelector('#total').innerText = expenseOperations.len();
}

function add(){
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let cost = document.querySelector('#cost').value;
    let remarks = document.querySelector('#remarks').value;
    let color = document.querySelector('#color').value;
    let date = document.querySelector('#date').value;
    let photo = document.querySelector('#photo').value;
    let expenseObject = expenseOperations.add(id, name,cost,remarks,photo,color,date);
    printExpense(expenseObject);
    updateCount();
}

function edit(){
    console.log('I am edit');
}

function mark(){
    console.log('I am Mark ',this);
    this.parentNode.parentNode.classList.toggle ( 'alert-danger');
}

function createIcon(iconClass, fn){
    let iTag = document.createElement('i');
    iTag.className = `${iconClass} ${config.icons.hand}`;
    iTag.addEventListener('click', fn);
    return iTag;
}

function printExpense(expenseObject){
    let tbody = document.querySelector('#expenses');
    let tr = tbody.insertRow();
    let index = 0;
    for(let key in expenseObject){
        tr.insertCell(index).innerText = expenseObject[key];
        index++;
        //console.log(expenseObject[key]);
    }
    let td = tr.insertCell(index);
    td.appendChild(createIcon(config.icons.edit, edit));
    td.appendChild(createIcon(config.icons.trash, mark));
}