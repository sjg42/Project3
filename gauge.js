
d3.json("project3data.json").then(
  function(project3data)
  {
      // console.log()
      console.log(project3data);


  });

    // Fetch the JSON data and plot the gauge chart
d3.json("project3data.json").then((data) => {
  //console.log(data)
  // Get the Diabetes_binary, BMI, and HighBP data
  let Diabetes_binary = data.map(data => data.Diabetes_binary);
  //console.log(Diabetes_binary)
  //let BMI = data.BMI;
  let HighBP = data.map(data => data.HighBP);

  // Get the select element from the HTML
  let dropdown = d3.select("#selDataset");

  // Populate the dropdown menu with the available options
  let options = ["Diabetes_binary", "HighBP"];
  options.forEach((option) => {
    dropdown.append("option").text(option);
  });
let filteredData = 0

  // Add an event listener to the dropdown menu to update the chart when a new option is selected
  dropdown.on("change", function() {
    
    // Get the selected option from the dropdown menu
    let selectedOption = this.value;
    console.log(selectedOption)
    console.log(HighBP)
    if (selectedOption == "Diabetes_binary")
    {
    filteredData = Diabetes_binary

    }
    else{
      filteredData = HighBP
//console.log(HighBP)
//console.log(filteredData)
      }
//console.log(filteredData)
    // Filter the data based on the selected option
    //let filteredData = data.selectedOption;
    let val =filteredData.reduce((a,b) =>a+b, 0)/filteredData.length

console.log(val)

    // Trace for the gauge chart
    let trace = [{
      type: "indicator",
      mode: "gauge+number",
      value: val,
      gauge: {
        axis: {
          range: [null, 1],
          tickvals: [0, 0.25, 0.5, 0.75, 1],
          tickformat: '%'
        },
        steps: [
          { range: [0, 0.4], color: "green" },
          { range: [0.4, 0.75], color: "yellow" },
          { range: [0.75, 1], color: "red" }
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: HighBP
        },
        bar: { color: "darkblue" },
        number: {
          suffix: "%",
          font: { size: 30 },
          valueformat: ".1f"
        }
      }
    }];

    // Layout for the gauge chart
    let layout = {
      title: { text: "<b>" + selectedOption + " Gauge</b><br>(High Blood Pressure)" },
      font: { size: 18 }
    };

    // Use Plotly to plot the data in a gauge chart
    Plotly.newPlot("gauge", trace, layout);
  });
});




