//alert('hetic');


//document.querySelector

document.querySelector('.logo').addEventListener('click', function(){
  
  document.querySelector('.menu').classList.add('menu--show');
  console.log('ok');
});


document.querySelector('.menu').addEventListener('click', function(){

  document.querySelector('.menu').classList.remove('menu--show');
 console.log('zut');
})

// document.querySelector('.logo').addEventListener('click', function(){
  
//   document.querySelector('.menu').classList.toggle('menu--show');
//   console.log('ok');
// });

// document.body.addEventListener('click', function(){
//   document.querySelector('.menu').classList.remove('menu');
// });

// document.querySelector('.logo').addEventListener('click', function(){
  
//   document.querySelector('.menu--show').className ='menu';
//   //console.log();
// });