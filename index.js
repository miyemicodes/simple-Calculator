(function () {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      // check if button class is equal to
      if (e.target.classList.contains('btn-equal')) {
        console.log('oh its equal');
        // continue elizabeth process
        if (screen.value === '') {
          screen.value = 'enter value';
        } else {
          let answer = eval('screen.value');
          screen.value = answer;
          console.log(screen.value);
        }
      } else {
        let value = e.target.dataset.num;
        screen.value += value;
      }
    });
  });

  /* equal.addEventListener( 'click', function ( e ) {
        if(screen.value === '') {
            screen.value = "enter value";
        } else {
            let answer = eval('screen.value');
            screen.value = answer;
            console.log(screen.value);

        } 
    })*/

  clear.addEventListener('click', function (e) {
    screen.value = '';
  });
})();
