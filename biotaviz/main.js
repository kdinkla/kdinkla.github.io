// Smooth internal link scroll.
$(document).ready(function () {
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

// Lightbox.
jQuery(document).ready(function ($) {
    // Initialize.
    var lightbox =
    '<div id="lightbox">' +
        '<div id="lightboxContent"></div>' +
    '</div>';

    $('body').append(lightbox);
    $('#lightbox').hide();

    // Click to remove.
    $('#lightbox').click(function (e) {
        $('#lightbox').fadeOut(500);
    });

    // Click on link to appear.
    $('.lightbox').click(function (e) {
        // Stop default hyperlink.
        e.preventDefault();

        // Make linked image appear.
        $('#lightboxContent').html('<img src="' + $(this).attr("href") + '" />');
        $('#lightbox').fadeIn(500);
    });
});