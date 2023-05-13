let url = "project3data.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });
  
  
  // Initialize the dashboard at start up 
  function init() {
  
      // Use D3 to select the dropdown menu
      let dropdownMenu = d3.select("#selDataset");
  
      // Use D3 to get sample names and populate the drop-down selector
      d3.json(url).then((data) => {
          
          // Collects all sample names
          let ID = data._id.$oid;
  
          // set a function to log each ID of each sample name
          // also we create a drop down menu that allows us
          // to select whichever ID we want to select and see 
          // on our bar and bubble plots
          ID.forEach((id) => {
  
              // Log the value of id for each iteration of the loop
              console.log(id);
  
              dropdownMenu.append("option") // allows us to select 
              .text(id); // shows each ID as an option to select
          });
  
          // to get our initial value for each sample
          // which includes all our needed values
          let sample_one = ID[0];
  
          // Log the value of sample_one
          console.log(sample_one);
  
          // Build the initial plots
          Metadata(sample_one);
          Bar(sample_one);
          // these functions will be created before we
          // ever call the init() function
  
      });
  };
  // Function that fills out our "Demographic Info" box
function Metadata(sample) {

    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {

        // Retrieve all metadata
        let metadata = data.HighBP;

        // Filter only to chosen ID
        let v1Y = metadata.filter(result => result.HighBP == 1);
        console.log(v1Y)
        let v1N = metadata.filter(result => result.HighBP == 0);
        console.log(v1N)
        let v2Y = metadata.filter(result => result.HighChol == 1);
        let v2N = metadata.filter(result => result.HighChol == 0);
        let v3Y = metadata.filter(result => result.Smoker == 1);
        let v3N = metadata.filter(result => result.Smoker == 0);
        let v4Y = metadata.filter(result => result.Stroke == 1);
        let v4N = metadata.filter(result => result.Stroke == 0);
        let v5Y = metadata.filter(result => result.HeartDiseaseorAttack == 1);
        let v5N = metadata.filter(result => result.HeartDiseaseorAttack == 0);
        // remember, each ID will have all the subordinate demographic info

    });
};


// use d3 to access data fron json file
d3.json("project3data.json").then(function(data){
    //view data in console
    //console.log(data);
});

// functions that filter data for people with health risks (1)
function withHighBP(oneHBP)
{return oneHBP.HighBP == 1}

function withHighChol(oneHChol)
{return oneHChol.HighChol == 1}

function withSmoke(oneSmoke)
{return oneSmoke.Smoker == 1}

function withStroke(oneStroke)
{return oneStroke.Stroke == 1}

function withHDorA(oneHDA)
{return oneHDA.HeartDiseaseorAttack == 1}

// functions that filter data for people without health risks (0)
function noHighBP(zeroHBP)
{return zeroHBP.HighBP == 0}

function noHighChol(zeroHChol)
{return zeroHChol.HighChol == 0}

function noSmoke(zeroSmoke)
{return zeroSmoke.Smoker == 0}

function noStroke(zeroStroke)
{return zeroStroke.Stroke == 0}

function noHDorA(zeroHDA)
{return zeroHDA.HeartDiseaseorAttack== 0}


// use data from json to plot charts
d3.json("project3data.json").then(function(data){

    // filter results 
    let BP = data.filter(withHighBP);
    //console.log(BP); //confirm values
    let noBP = data.filter(noHighBP);
    //console.log(noBP); //confirm values
    let smoker = data.filter(withSmoke);
    let nonSmoker = data.filter(noSmoke);
    let stroke = data.filter(withStroke);
    let HDorA = data.filter(withHDorA);
    let noHeartDorA = data.filter(noHDorA);

 
    // Get trace information in order to plot data
    let diabeticTrace = {
        x: BP.map(result => result.withHighBP),
        y: smoker.map(result => result.withSmoke),
        name: "Not at risk of Diabetes",
        type: "bar"
    };

    let nonDiabeticTrace = {
        x: noBP.map(result => result.noHighBP),
        y: nonSmoker.map(result => result.nonSmoker),
        name: "At risk of Diabetes",
        type: "bar"
    };

    // create array for traces to be plotted together
    let info= [diabeticTrace, nonDiabeticTrace];

    // add layout properties
    let layout = {
        title: "Diabetic Risk vs Health Conditions in the Population",
        barmode: "group"
    };

    // render plot to tag with id = "plot"
    Plotly.newPlot("plot",info, layout)

});

