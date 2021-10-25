document.addEventListener("DOMContentLoaded", function(event) {


    const cartButtons = document.querySelectorAll('.cart-button');
    
    cartButtons.forEach(button => {
    
    button.addEventListener('click',cartClick);
    
    });
    
    function cartClick(){
    let button =this;
    button.classList.add('clicked');
    }
    
    
    
    });

    var app = new Vue({
        el: "#app",
        data: {
          logoLists: [
          {
            column1: [
            { name: 'Airbnb', src: 'fab fa-airbnb' },
            { name: 'Amazon', src: 'fab fa-amazon' },
            { name: 'Paypal', src: 'fab fa-cc-paypal' }] },
      
      
          {
            column2: [
            { name: 'Fedex', src: 'fab fa-fedex' },
            { name: 'Facebook', src: 'fab fa-facebook' },
            { name: 'Instagram', src: 'fab fa-instagram' }] },
      
      
          {
            column3: [
            { name: 'Spotify', src: 'fab fa-spotify' },
            { name: 'Steam', src: 'fab fa-steam' },
            { name: 'Tiktok', src: 'fab fa-tiktok' }] }] },
      
      
      
      
        mounted() {
          this.initLogosCarousel();
        },
        methods: {
          initLogosCarousel() {
            // This method is to iterate the active class to each row with interval, 2.5s
            const colName = ['.carousel1', '.carousel2', '.carousel3'];
      
            colName.forEach(col => {
              // Convert array-like object (nodelist) to new Array, carousel
              const carousel = Array.from(document.querySelectorAll(`.logosCarousel ${col}`));
              const carouselCount = carousel.length;
              let activeCarouselId = 0;
      
              setInterval(() => {
                // Query current active class in carousel
                const activeCarousel = document.querySelector(`${col}.active`);
      
                // Set active carousel id to 0 if already reach to the last index / logo
                if (carousel.indexOf(activeCarousel) === carouselCount - 1) activeCarouselId = 0;else
                activeCarouselId++;
      
                // Remove any active class
                activeCarousel.classList.remove('active');
                // Set new active class based on current active carousel id
                document.querySelectorAll(`.logosCarousel ${col}`)[activeCarouselId].classList.add('active');
              }, 2500);
            });
          },
          setActiveClass(colId, rowId) {
            // In every column, first row / logo need to set as active
            if (colId === 0 && rowId === 0 || colId === 1 && rowId === 0 || colId === 2 && rowId === 0) return 'active';
          } } });

    
//testononial//

// vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}
