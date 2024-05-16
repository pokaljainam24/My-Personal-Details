
//   Mobile nav toggle

$('.mobile-nav-toggle').on("click", function() {
    $('body').toggleClass('mobile-nav-active');
    $(this).toggleClass('bi-list bi-x');
});


// Text typed

$('.animate-type').animatedHeadline({
    animationType: 'type'
});


