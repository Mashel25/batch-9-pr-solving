// 4! = 4*3*2*1 = 24
// 5! = 5*4*3*2*1 = 120
// 0! = 1
// 1! = 1

// Factorial calculation
function factorial(n) {
    let fac = 1;
    if (n === 0) {
      return fac;
    }
    for (let i = 2; i <= n; i++) {
      fac *= i;
    }
    return fac;
}
  
console.log(`Factorial result: ${factorial(5)}`);
