// Find Fabioncci Series n times

let findFabionciSeries = (num) => {
  let prev1 = 0;
  let prev2 = 1;
  let prev3;
  if (prev1 == 0) console.log(0);
  if (prev2 == 1) console.log(1);

  for (i = 2; i < num; i++) {
    prev3 = prev1 + prev2;
    console.log(prev3);
    prev1 = prev2;
    prev2 = prev3;
  }

};
findFabionciSeries(10);
