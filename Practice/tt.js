const obj = {
    getThisGetter1() {
      const getter = () => this;
      return getter;
    },
    
    getThisGetter2() {
      function getter(){ return this;};
      return getter;
    }
  };
  
const fn1 = obj.getThisGetter1()
console.log(fn1() === obj)
const fn11 = obj.getThisGetter1
console.log(fn11()() === obj)
  
const fn2 = obj.getThisGetter2()
  console.log(fn1() === obj)
const fn11 = obj.getThisGetter1
  console.log(fn11()() === obj)
  
  