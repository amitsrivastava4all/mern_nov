window.addEventListener('DOMContentLoaded',bindEvents);
//DOMContentLoaded (less lazy)
// load (Lazy)
function bindEvents(){
    //alert('Bind Event Call');
document.getElementById('greet')
.addEventListener('click',readTxt);
document.getElementById('clear')
.addEventListener('click',clearAll);
}
function clearAll(){
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
    document.getElementById('output').innerText = '';
}
function readTxt(){

    var firstName = window.document.getElementById('first').value;
    var lastName = document.getElementById('second').value;
    //var result = 'Welcome '+firstName + ' '+lastName;
    var result = `Welcome ${firstName} ${lastName}`;
    document.getElementById('output').innerText = result;
}
