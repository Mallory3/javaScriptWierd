// const a = "Hello World!"

// function b() {
//   console.log('Called b!')
// }

function a() {
  function b() {
    console.log(myVar);
  }

  var myVar;
  b();
}

var myVar = 1;
a();