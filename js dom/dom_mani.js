var count =0


function increment(){
    count= count+1
    document.getElementsByClassName('counter')[0].innerHTML =count
}
document.getElementById('btn').addEventListener('click',increment);

document.getElementById('name_btn').addEventListener('click', writename);


function writename(){
    let name = document.getElementById('name').value
    let myList = document.getElementById('myList')
    let list = document.createElement('li');
    list.innerText =name 
    myList.appendChild(list);
}
