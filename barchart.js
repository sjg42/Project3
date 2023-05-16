// use d3 to access data fron json file
d3.json("project3data.json").then(function(data){
    //view data in console
    //console.log(data);
});

// functions that filter data for people with health indicators (1)
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

// functions that filter data for people without health indicators (0)
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

// Establish variables for all 10 health indicators 
var v1
var v2
var v3
var v4
var v5
var v6
var v7
var v8
var v9
var v10

// filter results to show each health risk with it's corresponding 1 or 0
d3.json("project3data.json").then(function(data){
    let BP = data.filter(withHighBP);
    //console.log(Object.keys(BP).length); //confirm values

    let noBP = data.filter(noHighBP);
    //console.log(Object.keys(noBP).length);

    let smoker = data.filter(withSmoke);
    //console.log(Object.keys(smoker).length);

    let nonSmoker = data.filter(noSmoke);
    //console.log(Object.keys(nonSmoker).length);

    let stroke = data.filter(withStroke);
    //console.log(Object.keys(stroke).length);

    let dontHaveStroke = data.filter(noStroke);
    //console.log(Object.keys(dontHaveStroke).length);

    let HDorA = data.filter(withHDorA);
    //console.log(Object.keys(HDorA).length);

    let nHDorA = data.filter(noHDorA);

    let HCh = data.filter(withHighChol);

    let  nHCh = data.filter(noHighChol);

    // variables for health indicator totals using the v1,v2, v3, etc.
    v1 = Object.keys(BP).length
    console.log("v1"+ v1);

    v2 = Object.keys(noBP).length
    console.log(v2);

    var v3 = Object.keys(smoker).length
    console.log(v3);

    var v4 = Object.keys(nonSmoker).length
    console.log(v4);

    var v5 = Object.keys(stroke).length
    console.log(v5);

    var v6 = Object.keys(dontHaveStroke).length
    console.log(v6);

    var v7 = Object.keys(HDorA).length
    console.log(v7);

    var v8 = Object.keys(nHDorA).length
    console.log(v8);

    var v9 = Object.keys(HCh).length
    console.log(v9);

    var v10 = Object.keys(nHCh).length
    console.log(v10);
    
    var population = v1 + v2
    console.log((v1/population) * 100);

    // calculate the population % for each health indicator
    var per1 = (v1/population)*100
    var per2 = (v2/population)*100
    var per3 = (v3/population)*100
    var per4 = (v4/population)*100
    var per5 = (v5/population)*100
    var per6 = (v6/population)*100
    var per7 = (v7/population)*100
    var per8 = (v8/population)*100
    var per9 = (v9/population)*100
    var per10 = (v10/population)*100

    // Get trace information in order to plot data
    let trace1= {
        x: ["HighBloodPressure", "NoHighBloodPressure"],
        y: [per1, per2],
        name: "Blood Pressure",
        type: "bar",
        marker: {
            opacity:[.5,.9]
        }
    };

    let trace2= {
        x: ["Smoker", "NonSmoker"],
        y: [per3, per4],
        name: "Smoking",
        type: "bar",
        marker: {
            opacity:[.5,.9]
        }
    };

    let trace3= {
        x: ["Stroke", "NoStroke"],
        y: [per5, per6],
        name: "Stroke",
        type: "bar",
        marker: {
            opacity:[.5,.9]
        }
    };

    let trace4= {
        x: ["HeartDisease/Attack", "NoHeartDisease/Attack"],
        y: [per7,per8],
        name: "Heart Disease/Attack",
        type: "bar",
        marker: {
            opacity:[.5,.9]
        }
    };

    let trace5= {
        x: ["HighCholesteral", "NoHighCholesterol"],
        y: [per9, per10],
        name: "Cholesterol",
        type: "bar",
        marker: {
            opacity:[.5,.9]
        }
    };

    var population = v1 + v2
    console.log((v1/population) * 100);
    

    // create array for traces to be plotted together
    let info= [trace1, trace2,trace3,trace4,trace5];

     // add layout properties
     let layout = {
        title: "Diabetic Health Indicators Compared",
        xaxis: {
            title: "Health Indicators"
        },
        yaxis: {
            title: "Population %"
        }, 
        barmode: "group",
    };
      // render plot to tag with id = "plot"
      Plotly.newPlot("plot",info,layout)
}); 



