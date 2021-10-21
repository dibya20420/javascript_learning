var count =0;

var addBtn = document.getElementById('add').addEventListener('click',addTask)

function addTask(){

    var element = document.getElementById('TaskFeed').value
    var taskContainer = document.getElementsByClassName('taskContainer')[0]
    taskContainer.innerHTML=
    `
    <div class="task" id="task${count}">
            <span class="taskDes">${element}</span>
            <button id="btnDelete${count}">delete</button>
        </div>
    `+taskContainer.innerHTML;
    count++;
    for(var i=0;i<count;i++){
            document.getElementById(`btnDelete${i}`).addEventListener('click',function(i){
                document.getElementById(`task${i}`).remove();
            })
    }
 


}
