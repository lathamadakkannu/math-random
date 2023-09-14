
//normal method console use
/*
var a=6;
var b=4;
function add(x,y){
    c=x+y;
  var c;
  console.log(c);
  }
add(a,b);
*/

//return use
/*
var a=6;
var b=8;
function add(x,y){
    c=x+y;
  var c;
  return c;
  //console.log(c);
  }
var result=(add(a,b));
console.log(result);
*/

//Math random method

  let min=prompt("enter min value");
    let max=prompt("enter max value");
//min=0;
//max=6;
    function add(){
      var result=Math.floor(Math.random()*(max-min)+1);
      console.log(result);
    }
  add();
  setInterval(add,500);
  