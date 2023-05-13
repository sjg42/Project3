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

