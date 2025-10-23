<<<<<<< HEAD
<<<<<<< HEAD
let form =  document.querySelector('form');
form.addEventListener('submit',function(e){
e.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('#result');

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    result.innerHTML = (weight / ((height*height) / 10000)).toFixed(2);

  }
}
)
=======
=======
>>>>>>> d29c92dd310cb4d3e4c6b4e233a8129193b94430
let form =  document.querySelector('form');
form.addEventListener('submit',function(e){
e.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('#result');

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    result.innerHTML = (weight / ((height*height) / 10000)).toFixed(2);

  }
}
)
<<<<<<< HEAD
>>>>>>> d29c92d (.)
=======
>>>>>>> d29c92dd310cb4d3e4c6b4e233a8129193b94430
