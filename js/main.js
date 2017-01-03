$(document).ready(function() {
    $('.login-popup-closer').click(closePopup);
});

function closePopup() {
    $('.login-popup').hide();
    $('.login-popup-closer').hide();
}
