//Use the D3 library to read in "samples.json"
d3.json("project3data.json").then(function(data)
    {
        //show data in console
        console.log(data)
        init(data)
    }
)

function init(jsonData)
{
  let filteredData = jsonData.map(jsonData=>jsonData.Diabetes_binary)
  plot_data("Diabetes",filteredData,jsonData)
  populate_dropdown(jsonData)
}


function optionChanged()
{
  d3.json("project3data.json").then(function(data)
    {
      // d3 selector on the dropdown menu
    let dropdown = d3.select("#selDataset");

    // access nested value property from the selected option
    let value = dropdown.property("value");

    let filteredData=0
    //check what the value of the ID is 
    if (value == "Diabetes")
    {
      filteredData = data.map(data=>data.Diabetes_binary)
    }
    else
    {
      filteredData = data.map(data=>data.HighBP)
    }
    plot_data(value, filteredData,data)
  }
  )
}

// call on d3 selector associate the dropdown with an object
d3.selectAll("#selDataset")


function populate_dropdown(jsonData)
{
  //make variable for Sample names
  var columns = ["Diabetes","HighBP"]

  //loop through each ID and create an option for it
  //Reference - https://stackoverflow.com/questions/5182772/append-option-to-select-menu
  columns.forEach((col,index)=>{

      //create new option -> <option></option>
      var option = document.createElement("option")

      //set option parameters -> <option value = {name}> text </option>
      option.value = col
      option.text = col

      //add to dropdown
      var dropdown = document.getElementById("selDataset")
      dropdown.append(option)
  }
  )
}

function plot_data(selectedOption, filteredData)
{
  // Filter the data based on the selected option
        //let filteredData = data.selectedOption;
        let percent =(filteredData.reduce((a,b) =>a+b, 0)/filteredData.length)
        // Trace for the gauge chart
        let trace = [{
          type: "indicator",
          mode: "gauge+number",
          value: percent,
          gauge: {
            axis: {
              range: [null, 1],
              tickvals: [0, 0.25, 0.5, 0.75, 1],
              tickformat: '%'
            },
            steps: [
              { range: [0, .25], color: "green" },
              { range: [.25, .75], color: "yellow" },
              { range: [.75, 1], color: "red" }
            ],
            threshold: {
              line: { color: "red", width: 4 },
              thickness: 0.75,
              value: filteredData.length
            },
            bar: { color: "white" },
          },
          number: {
            font: { size: 30 },
            valueformat: ".2%"
          }
        }];

        // Layout for the gauge chart
        let layout = {
          title: { text: "<b> Percent of Population with " + selectedOption},
          font: { size: 18 }
        };

        // Use Plotly to plot the data in a gauge chart
        Plotly.newPlot("gauge", trace, layout);
}