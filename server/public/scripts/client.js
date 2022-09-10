$(readyNow);

function readyNow() {

    $('#taskTable').on('click', '.arrow', changeTaskOrder)
}







function changeTaskOrder() {
    let arrowDirection = $(this).attr('class').split(' ')[1];
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
          console.log('PUT /order success',response);
          getTasks();
        })
        .catch((error) => {
          console.log('error in PUT /order',error);
        });
}