fetch('project3.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    const columnA = rows.map(row => row.split(',')[0]);
    console.log(columnA); // outputs the data in Column A as an array
    const columnE = rows.map(row => row.split(',')[4]);
    console.log(columnE); // outputs the data in Column E as an array
    var newColumnE = columnE
    // .slice(1,253682)
    console.log(newColumnE)
    //Create For Loop to remove Nan
    for (let i = 0; i < newColumnE.length; i++) {
      if (isNaN(newColumnE[i])) {
        newColumnE.splice(i, 1);
        i--; // Decrement the counter to recheck the current index in the next iteration
      }
    }
    var res = newColumnE.filter(elements => {
      return parseFloat(elements) !== NaN;
     });
    //Calculate Mean and Std Dev
    const mean = newColumnE.reduce((a, b) => a + parseFloat(b), 0) / newColumnE.length;
    console.log(mean)
    const standardDeviation = Math.sqrt(newColumnE.reduce((sq, n) => sq + Math.pow(parseFloat(n) - mean, 2), 0) / columnE.length);
    var diabetesCount = [];
    var nonDiabetesCount = [];
    var midpoints = [];
    var bins = [];
    var interval = 3;
    var numOfBuckets = 2000;
    //Setup Bins
    for(var i = 0; i < numOfBuckets; i += interval){
      bins.push({
          binNum: i,
          minNum: i + 0.5,
          maxNum: i + interval - 0.5,
          diabetesCount: 0,
          nonDiabetesCount: 0
      });
    }
    // Loop through data and count occurrences in respective bins
    for (var i = 0; i < columnE.length; i++){
      var item = parseFloat(columnE[i]);
      var diabetes = parseFloat(columnA[i]);
      for (var j = 0; j < bins.length; j++){
        var bin = bins[j];
        if(item > bin.minNum && item <= bin.maxNum){
          if (diabetes === 1) {
            bin.diabetesCount++;
          } else {
            bin.nonDiabetesCount++;
          }
          break; // An item can only be in one bin.
        }
      }
    }
    console.log(bin)
    // Extract bin data for plotting
    for (var i = 0; i < bins.length; i++) {
      var bin = bins[i];
      var midpoint = (bin.minNum + bin.maxNum) / 2;
      midpoints.push(midpoint);
      diabetesCount.push(bin.diabetesCount);
      nonDiabetesCount.push(bin.nonDiabetesCount);
    }
    // Prepare data for chart
    const chartData = {
      datasets: [
        {
          label: 'Diabetes',
          data: midpoints.map((midpoint, index) => ({ x: midpoint, y: diabetesCount[index] })),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Non-Diabetes',
          data: midpoints.map((midpoint, index) => ({ x: midpoint, y: nonDiabetesCount[index] })),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        }
      ]
    };
    // Create chart
    const ctx = document.getElementById('bellCurveChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'BMI Distribution by Diabetes Status'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Count'
            }
          }
        }
      }
    });
    console.log(bins);
  });
    // Extract bin data for plotting
    for (var i = 0; i < bin.length; i++) {
      var bin = bins[i];
      var midpoint = (bin.minNum + bin.maxNum) / 2;
      diabetesData.push({ x: midpoint, y: bin.diabetesCount });
      nonDiabetesData.push({ x: midpoint, y: bin.nonDiabetesCount });
    }
      console.log(nonDiabetesData)
    // Prepare data for chart
    const chartData = {
      datasets: [
        {
          label: 'Diabetes',
          data: diabetesData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Non-Diabetes',
          data: nonDiabetesData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        }
      ]
    };
    // Create chart
    const ctx = document.getElementById('bellCurveChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'BMI Distribution by Diabetes Status'
            }
          },
          y: {
            display
: true,
title: {
display: true,
text: 'Count'
}
}
}
}
});
console.log(bins);
;