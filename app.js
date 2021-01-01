'use strict'  // Activate strict mode, avoids making stupid assumptions like Garrison in a math class

const switcher = document.querySelector('.btn');   // gets button reference

switcher.addEventListener('click', function() {  // listener for click event--function  passed in is actual event handler
    document.body.classList.toggle('dark-theme')  // toggle method switches element to dark-theme class

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);  // doesn't appear on the webpage, but useful for debugging
});