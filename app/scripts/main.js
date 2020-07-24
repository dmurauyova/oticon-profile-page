console.log("'Allo 'Allo!");

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

$(document).ready(function () {
  $(".portfolio").on("click", function (e) {
    if (jQuery(this).attr("aria-expanded") === "true") {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  $(".portfolio-devices .btn").on("click", function () {
    let target = $(this).attr("href");
    console.log(target);
    $(target).show().addClass("animated bounceOutLeft");
  });
});
