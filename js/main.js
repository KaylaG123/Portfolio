// // build scene
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
//                 // trigger animation by adding a css class
//                 .setClassToggle("#animate1", "zap")
//                 .addTo(controller);
//
// var scene = document.querySelector('#phone .phone');
// var parallaxInstance = new Parallax(scene);
//
//
// var typed = new Typed('#typed', {
//     stringsElement: '#typed-strings',
//     typeSpeed: 40
// });
//
// // init controller
// var controller = new ScrollMagic.Controller();
//
//
// // build scenes
// var revealElements = document.getElementsByClassName("digit");
// for (var i=0; i<revealElements.length; i++) { // create a scene for each element
//    new ScrollMagic.Scene({
//        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
//        offset: 10,												 // start a little later
//        triggerHook: 0.9,
//    })
//    .setClassToggle(revealElements[i], "visible") // add class toggle
//    .addTo(controller);
// }

jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },4000);
    });
});


particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#66fcf1"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#66fcf1"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true,

      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
