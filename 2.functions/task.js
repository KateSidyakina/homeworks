function getArrayParams(...arr) {
  const array = [...arr];
  min = Math.min(...array);
  max = Math.max(...array);

  sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    0
  );
  
  avg = Number((sum / array.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const array = [...arr];

  if (array.length > 0) {
    summ = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 
      0
    );
  } else {
    return 0;
  }

  return summ;
}

function differenceMaxMinWorker(...arr) {
  const array = [...arr];

  if (array.length > 0) {
    min = Math.min(...array);
    max = Math.max(...array);
  } else {
    return 0;
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  const array = [...arr];
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sumEvenElement += array[i];
      } else {
        sumOddElement += array[i];
      }
    }
  } else {
    return 0;
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  const array = [...arr];
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sumEvenElement += array[i];
        countEvenElement++;
      }
    }
  } else {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const element = func(...arrOfArr[i]);
    if (element > maxWorkerResult) {
      maxWorkerResult = element;
    }
  }

  return maxWorkerResult;
}
