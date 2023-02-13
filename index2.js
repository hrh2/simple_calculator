const add = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
      sum += number;
    }
    return sum;
  };
  
  const multiply = (numbers) => {
    let product = 1;
    for (const number of numbers) {
      product *= number;
    }
    return product;
  }

  module.exports={
    add,
    multiply
  }