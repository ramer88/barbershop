$(document).ready(function() {
    $('.login-popup-closer').click(closePopup);
    $('.account-menu').click(showPopup);
    $('.top-menu a').click(menuClick);
});

function closePopup() {
    $('.login-popup').hide();
    $('.login-popup-closer').hide();
}

function showPopup() {
    $('.login-popup').show();
    $('.login-popup-closer').show();
}

function menuClick(e) {
    $('.top-menu a.active').removeClass('active');
    $(e.target).addClass('active');
}
