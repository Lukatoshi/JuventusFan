// window.sr = ScrollReveal({ reset: true });

// sr.reveal('.h2-historia', {duration : 3000});

// sr.reveal('.sub-line', {
//     rotate:{ x: 0, y: 80, z: 0},
//     duration : 2000});

//     sr.reveal('.side-logo1', {
//         rotate:{ x: 70, y:0, z: 0},
//         duration : 2000});

//         sr.reveal('.bowser', {
//             rotate:{ x: 0, y:0, z: 0},
//             duration : 3000});
    




//             $(document).ready(function(){
//                 $('.carousel').slick({
//                   slidesToShow: 3,
//                   slidesToScroll: 1,
//                   prevArrow: '<button type="button" class="slick-prev">&#9665;</button>',
//                   nextArrow: '<button type="button" class="slick-next">&#9655;</button>',
//                   responsive: [
//                     {
//                       breakpoint: 768,
//                       settings: {
//                         slidesToShow: 2
//                       }
//                     },
//                     {
//                       breakpoint: 480,
//                       settings: {
//                         slidesToShow: 1
//                       }
//                     }
//                   ]
//                 });
//               });
    document.getElementById("toggleLink").addEventListener("click", function(event) {
        event.preventDefault(); // Evita que o navegador siga o link
        var toggleButton = document.querySelector("[data-target='#navbarHeader']");
        if (toggleButton) {
            toggleButton.click(); // Simula um clique no botão de toggle
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola para o topo da página suavemente
        }
    });
