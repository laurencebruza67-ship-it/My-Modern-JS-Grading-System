const midtermInput = document.getElementById("midterm-input");
const finalInput = document.getElementById("final-input");
const computeBtn = document.getElementById("compute-btn");
const outputMatrix = document.getElementById("output-matrix");

function calculateGradePayload() {
    
    const trimmedInputMidterm = midtermInput.value.trim();
     const trimmedInputFinal = finalInput.value.trim();

    let midtermScore = Number(trimmedInputMidterm);
    let finalScore = Number(trimmedInputFinal);

    let computedScore = (midtermScore * 0.45) + (finalScore * 0.55);
    console.log(computedScore);

    if (trimmedInputMidterm === "" && trimmedInputFinal === "") {
        outputMatrix.innerHTML = "<strong class='text-danger'><h1>INVALID!</h1> Please enter a valid Final Grade and Midterm Grade before submitting..</strong>";
        return;

    } else if (trimmedInputMidterm === "") {
        outputMatrix.innerHTML = "<strong class='text-danger'><h1>INVALID!</h1>  Please don't put an empty input on the midterm grade.</strong>";
        return;

    } else if (trimmedInputFinal === "") {
        outputMatrix.innerHTML = "<strong class='text-danger'><h1>INVALID!</h1>  Please don't put an empty input on the final grade.</strong>";
        return;

    } else if (isNaN(trimmedInputMidterm) && isNaN(trimmedInputFinal)) {
        outputMatrix.innerHTML = "<strong class='text-danger'><h1>INVALID!</h1>  Please enter a valid input score. </strong>";
        return;

    } else if (isNaN(trimmedInputMidterm)) {
        outputMatrix.innerHTML = "<strong class='text-danger'><h1>INVALID!</h1>  Please enter a valid input score on the midterm grade.</strong>";
        return;

    } else if (isNaN(trimmedInputFinal)) {
        outputMatrix.innerHTML = "<strong class='text-danger'><h1>INVALID!</h1> Please enter a valid input score on the final grade.</strong>";
        return;

    } else if (computedScore < 0) {
        outputMatrix.innerHTML = "<strong class='text-danger'><h1>INVALID!</h1>  Score must be between 0 and 100.</strong>";
        return;

    } else if (computedScore > 100) {
        outputMatrix.innerHTML = "<strong class='text-danger'><h1>INVALID!</h1>  Score must be between 0 and 100.</strong>"; 
        return;
    }
    
    let statustext = "";
    let statusColorClass = "";

    if (computedScore === 100) {
        statustext = "A+";
        statusColorClass = "text-success";

    } else if (computedScore <= 74) {
        statustext = "Failed";
        statusColorClass = "text-danger";

    } else if (computedScore >= 96) {
        statustext = "A";
        statusColorClass = "text-success";

    } else if (computedScore >= 90) {
        statustext = "B";
        statusColorClass = "text-success";

    }  else if (computedScore >= 86) {
        statustext = "C";
        statusColorClass = "text-success";
        
    } else if (computedScore >= 81) {
        statustext = "D";
        statusColorClass = "text-success";
    

    } else if (computedScore >= 75) {
        statustext = "E";
        statusColorClass = "text-success";
    }        

    else {
        statustext = "Failed";
        statusColorClass = "text-danger";
    }

    outputMatrix.innerHTML =
     "<h4>Final Score: " + computedScore + "%" + "</h4>" + 
    "<h1 class='display-4 " + statusColorClass + " fw-bold'>" + statustext + "</h1>";
} 

    computeBtn.addEventListener("click", calculateGradePayload);