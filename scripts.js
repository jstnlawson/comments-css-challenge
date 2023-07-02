// I'm still not sure when it's best to use id vs class with this sort 
// page. In retrospect I'd probably go with class on everything aside
// from maybe the submit button

//I'd also just add jQuery because doing this the old way was very
//confusing to go back to

function hoverButtonId(buttonId) {
    var button = document.getElementById(buttonId);
  
    button.addEventListener('mouseover', function() {
      this.style.opacity = '0.5';
    });
  
    button.addEventListener('mouseout', function() {
      this.style.opacity = '1';
    });
  }

  hoverButtonId('send-btn');
  hoverButtonId('delete-btn');
  hoverButtonId('edit-btn');

  function hoverButtonClass(buttonClass) {
    let buttons = document.getElementsByClassName(buttonClass)
  
    for (let button of buttons) {
      button.addEventListener('mouseover', function() {
        this.style.opacity = '0.5'
      });
  
      button.addEventListener('mouseout', function() {
        this.style.opacity = '1'
      })
    }
  }

  hoverButtonClass('reply-button')
  hoverButtonClass('plus-btn')
  hoverButtonClass('minus-btn')

  //update number
