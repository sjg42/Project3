// use d3 to access data fron json file
d3.json("project3data.json").then(function(data){
    //view data in console
    //console.log(data);
});

// functions that filter data for people with health risks (1)
function withDiabetes(oneDiab)
{return oneDiab.Diabetes_binary == 1}

function withHighBP(oneHBP)
{return oneHBP.HighBP == 1}

function withHighChol(oneHChol)
{return oneHChol.HighChol == 1}

function withSmoke(oneSmoke)
{return oneSmoke.Smoker == 1}

function withStroke(oneStroke)
{return oneStroke.Stroke == 1}

function withHDorA(oneHDA)
{return oneHDA.HeartDiseaseorAttack== 1}

// functions that filter data for people without health risks (0)
function noDiabetes(zeroDiab)
{return zeroDiab.Diabetes_binary == 0}

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

    // filter results and make array
    let Diabetic = data.filter(withDiabetes);
    //console.log(Diabetic);
    let nonDiabetic= data.filter(noDiabetes);
    //console.log(nonDiabetic);
    let BP = data.filter(withHighBP);
    let noBP = data.filter(noHighBP);
    let smoker = data.filter(withSmoke);
    let nonSmoker = data.filter(noSmoke);
    let stroke = data.filter(withStroke);
    let HDorA = data.filter(withHDorA);
    let noHeartDorA = data.filter(noHDorA);
 
    // Get trace information in order to plot data
    let diabeticTrace = {
        x: Diabetic.map(entry => entry.HighBP, entry.HighChol, entry.Smoker, entry.Stroke, entry.HeartDiseaseorAttack),
        y: project3data.map(entry => (entry.Diabetes_binary/253680)* 100),
        name: "With Diabetes",
        type: "bar"
    };

    let nonDiabeticTrace = {
        x: project3data.map(entry => entry.HighBP(0), entry.HighChol(0), entry.Smoker(0), entry.Stroke(0), entry.HeartDiseaseorAttack(0)),
        y: project3data.map(entry => (entry.Diabetes_binary(0)/253680)* 100),
        name: "Without Diabetes",
        type: "bar"
    };

    // create array for traces to be plotted together
    let data = [diabeticTrace, nonDiabeticTrace];

    // add layout properties
    let layout = {
        title: "Diabetic Risk vs Health Condition in the Population",
        margin: {
            l: 50,
            r: 50,
            b: 200,
            t: 50,
            pad: 4
        }
    };

    // render plot to tag with id = "plot"
    Plotly.newPlot("plot", data, layout)



});

