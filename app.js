'use strict'  // Activate strict mode, avoids making stupid assumptions like Garrison in a math class

const switcher = document.querySelector('.theme-switcher-btn');   // gets button reference

switcher.addEventListener('click', function() {  // listener for click event--function passed in is actual event handler
    document.body.classList.toggle('mellow-theme')  // toggle method switches element to mellow-theme class

    var className = document.body.className;
    if(className == "mellow-theme") {
        this.textContent = "Light";
    }
    else {
        this.textContent = "Mellow";
    }

    console.log('current class name: ' + className);  // doesn't appear on the webpage, but useful for debugging
});