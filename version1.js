const container =  document.getElementById('container');
const highlight =  document.getElementById('progress');
var containerHeight;

window.onscroll = function(){
  containerHeight = container.offsetHeight - window.innerHeight;
  containerPos = container.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  progressPercentage = diff / containerHeight * 100;
  cssWidth = Math.floor(100 - progressPercentage);
  highlight.style.width = cssWidth + "%";
}



var config = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 786
        }
      },
      color: {
        value: ["#596173", "#02AEC6", "#7FFFD4",]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 12
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 3.5,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 100,
        color: "#fff",
        opacity: 0.023674428,
        width: 0.1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "right",
        random: true,
        // straight: true,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 2082.2488,
          rotateY: 3363.6328
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 70,
          line_linked: {
            opacity: 0.25
          }
        },
        bubble: {
          distance: 100,
          size: 5,
          duration: 8.598243,
          opacity: 0,
          speed: 100
        },
        repulse: {
          distance: 50,
          duration: 0.8
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }
  
  window.onload = function() {
    let clause = window.innerWidth < 768;
    config.particles.number.value = clause ? 80 : 150;
    particlesJS('particle', config);
  }
  ///////////////////////////////////////////
  // -----------------------------------------------

let blinkTextMenuLinks = document.querySelectorAll(".name1 ul li a");
blinkTextMenuLinks.forEach(link => {
  let letters = link.textContent.split("");
  link.textContent = "";
  letters.forEach((letter, i) => {
    i += 1;
    let span = document.createElement("span");
    let delay = i / 20;
    if (i % 2 === 0) {
      delay -= 0.1;
    } else {
      delay += 0.05;
    }
    let letterOut = document.createElement("span");
    letterOut.textContent = letter;
    letterOut.style.transitionDelay = `${delay}s`;
    letterOut.classList.add("out");
    span.append(letterOut);
    let letterIn = document.createElement("span");
    letterIn.textContent = letter;
    letterIn.style.transitionDelay = `${delay}s`;
    letterIn.classList.add("in");
    span.append(letterIn);
    link.append(span);
  });
});
// -------------------------------------------------------------------------

var _CONTENT = [ 
	"hello world!!!!", 

];

var _PART = 0;

var _PART_INDEX = 0;

var _INTERVAL_VAL;

var _ELEMENT = document.querySelector("#small1");

var _CURSOR = document.querySelector("#cursor");

function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	if(text === _CONTENT[_PART]) {
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 100);
		}, 1000);
	}
}

function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

_INTERVAL_VAL = setInterval(Type, 100);