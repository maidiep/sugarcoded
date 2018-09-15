
$(function() {

    $("contactForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        }
    });
});