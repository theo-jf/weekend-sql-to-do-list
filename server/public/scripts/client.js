$(readyNow);

function readyNow() {
    getTasks();
    $('#addTask').on('click', addTask);
    $('#taskTable').on('click', '.arrow', changeTaskOrder);
    $('#taskTable').on('click', '.removeTask', removeTask);
}

// Shows new task input at the top of the task table
function addTask() {
    $('#hiddenTask').toggle("slide");
    $('#newTaskReady').on('click', submitTask);
}


function getTasks() {
    console.log('In getTasks');

    $.ajax({
        method: 'GET',
        url: '/task'
    })
    .then((response) => {
        console.log('Get tasks successful');
        $('#taskTable').empty();
        $('#taskTable').append(`
            <tr id="hiddenTask">
                <td><input id="newTaskDescription"/></td>
                <td></td>
                <td><button id="newTaskReady">add</button></td>
            </tr>
        `);
        for (let task of tasks) {
            let complete = (task.complete === true) ? 'yes' : 'no';
            if (complete === 'yes') {
                // add specific id for "complete" styling
            } else {
                $('#taskTable').append(`
                <tr data-id=${task.id}>
                    <td class="name">${task.name}</td>
                    <td class="incomplete"></td>
                    <td><button class="removeTask">remove</button></td>
                </tr>
                `);
            }
        }
    })
    .catch((error) => {
        console.log('Error getting tasks', error);
    });
}

function submitTask() {
    if ($('#newTaskDescription').val() === '') {
        $('#hiddenTask').toggle();
        return;
    } else {
        let newTask = {
          name: $('#newTaskDescription').val(),
        }
        $.ajax({
            method: 'POST',
            url: '/task',
            data: newTask
        })
        .then((response) => {
            console.log('POST /task successful', response);
            getTasks();
        })
        .catch((error) => {
            console.log('error in POST /task', error)
        });
    }
}


function changeTaskOrder() {
    let arrowDirection = $(this).attr('class').split(' ')[1]; // give arrows class="arrow up" or class="arrow down"
    let idOne = $(this).parent().data('id') // edit targeting later
    let idTwo;

    if (arrowDirection === 'up') {
        idTwo = $(this).parent().prev().data('id'); // edit targeting later
    } else if (arrowDirection === 'down') {
        idTwo = $(this).parent().next().data('id'); // edit targeting later
    }   

    $.ajax({
        method: 'PUT',
        url: `/order/${idOne}/?=${idTwo}`
    })
    .then((response) => {
        console.log('PUT /order successful', response);
        getTasks();
    })
    .catch((error) => {
        console.log('error in PUT /order', error);
    });
}

function removeTask() {
    $.ajax({
        method: 'DELETE',
        url: `/task/${$(this).parent().parent().data('id')}`
    })
    .then((response) => {
        console.log('DELETE /task successful', response);
        
        // For check delete later
        // Swal.fire({
        //     icon: 'success',
        //     title: 'Are you sure?',
        //     text: 'Success',
        // })
        getTasks();
    })
    .catch((error) => {
        console.log('error in DELETE /task', error);
    });
}