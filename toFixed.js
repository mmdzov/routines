Number.prototype.fix = function(num) {
  let str = this + "";
  let arr = str.split("");
  let index = arr.findIndex(item => item === ".");
  let lastArg = arr.splice(0,index + 1)
  let spl = arr.splice(0,num)
  let result = lastArg.concat(spl).join("")
  if(num === 0) {
    let cut = lastArg.splice(0,index).join("")
    return +cut
  }
  return +result
}

let Foo = 13.736;
let result = Foo.fix(1) // 13.7

console.log(result) 
