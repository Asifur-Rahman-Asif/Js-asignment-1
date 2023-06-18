function getSquareRootOfSumOfSquares(numbers) {
    let sumOfSquares = 0;
     for (let i = 0; i < numbers.length; i++) {
     sumOfSquares += numbers[i] * numbers[i];
     }
     let squareRootOfSumOfSquares = Math.sqrt(sumOfSquares);
     return squareRootOfSumOfSquares;
    }
     let numbers = [1, 2, 3, 4, 5];
     let squareRootOfSumOfSquares = getSquareRootOfSumOfSquares(numbers);
    console.log(`The number is ${squareRootOfSumOfSquares}`);
