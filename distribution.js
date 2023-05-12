
//fetch .csv data and put it in array
fetch('project3.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    const columnA = rows.map(row => row.split(',')[0]);
    console.log(columnA); // outputs the data in Column A as an array
    const columnE = rows.map(row => row.split(',')[0]);
    console.log(columnE); // outputs the data in Column A as an array
    const onesData = columnA.filter((value, index) => columnA[index] === 1);
    const zerosData = columnA.filter((value, index) => columnA[index] === 0);
  });
    
 