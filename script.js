
//   Mobile nav toggle

// $('.mobile-nav-toggle').on("click",function() {
//     $("#header").toggle(10);
// });

$('.mobile-nav-toggle').on("click",function() {
    $('body').toggleClass('mobile-nav-active');
    $(this).toggleClass('bi-list bi-x');
});

