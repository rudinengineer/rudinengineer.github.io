$(function() {
    let counter = true
    AOS.init()

    if ( $(window).scrollTop() > 0 ) {
        $('.navbar').addClass('fixed')
    }
    $(window).on('scroll', function() {
        if ( $(window).scrollTop() > 0 ) {
            $('.navbar').addClass('fixed')
        }

        /*if ( $(window).scrollTop() > $('#about').offset().top && counter ) {
            const textCounts = document.querySelectorAll('.text-count')
            textCounts.forEach((value) => {
                const count = Number(value.textContent)
                for (let index = 0; index < count; index++) {
                    setTimeout(() => {
                        value.textContent = index + 1
                    }, 1000);
                }
            })
            counter = false
        }*/;
    })

    $('.hamburger').on('click', function() {
        $('.sidebar').toggleClass('sidebar-show')
    })

    $('.btn-sidebar-close').on('click', function() {
        $('.sidebar').toggleClass('sidebar-show')
    })

    $('.nav-link').on('click', function(e) {
        e.preventDefault()

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'easeInOutExpo')
    })
})
