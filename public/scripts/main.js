$(document).ready(() =>{
    $.ajax({
        method: 'GET',
        url: '/api',
        success: handleSuccess,
        error: handleError,
    });

    $('.requestBar').on('submit', (e)=>{
        e.preventDefault();
        let term = $('.searchinput').val()

        $.ajax({
            method: 'GET',
            url: `/api/${term}`,
            success: handleSuccess,
            error: handleError,
        })
    });

});
