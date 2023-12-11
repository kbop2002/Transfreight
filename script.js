// Register form submission
$('#registerForm').submit(function(event) {
    event.preventDefault();
    var form = $(this);
    var url = form.attr('action');
    var formData = form.serialize();

    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        success: function(response) {
            // Handle successful registration
            console.log(response);
            //window.location.href = '' ;
        error: function(error) {
            // Handle registration error
            console.log(error);
        }
    });
});

// Login form submission
$('#loginForm').submit(function(event) {
    event.preventDefault();
    var form = $(this);
    var url = form.attr('action');
    var formData = form.serialize();

    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        success: function(response) {
            // Handle successful login
            console.log(response);
        },
        error: function(error) {
            // Handle login error
            console.log(error);
        }
    });
});
