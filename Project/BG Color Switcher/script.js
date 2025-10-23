<<<<<<< HEAD
<<<<<<< HEAD

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'Grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'White') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'Blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'Yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
=======
=======
>>>>>>> d29c92dd310cb4d3e4c6b4e233a8129193b94430

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'Grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'White') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'Blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'Yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
<<<<<<< HEAD
>>>>>>> d29c92d (.)
=======
>>>>>>> d29c92dd310cb4d3e4c6b4e233a8129193b94430
});