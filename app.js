const midtermInput = document.getElementById("midterm-input");
const finalsInput = document.getElementById("finals-input");
const computeBtn = document.getElementById("compute-btn");
const outputMatrix = document.getElementById("output-matrix");


function showError(message) {
    outputMatrix.innerHTML = '<strong class="text-danger"><h1>INVALID!</h1> ' + message + '</strong>';
}


function calculateGradePayload() {
   
    const rawMidterm = midtermInput.value.trim();
    const rawFinals = finalsInput.value.trim();

   
    const midtermScore = Number(rawMidterm);
    const finalsScore = Number(rawFinals);

   
    

    if (rawMidterm === "" || rawFinals === "") {
        showError("Both Midterm and Finals grades must be entered.");
        return;
    }

   
    if (isNaN(midtermScore) || isNaN(finalsScore)) {
        showError("Scores must be numeric values.");
        return;
    }

    if (midtermScore < 0 || midtermScore > 100) {
        showError("Midterm grade must be between 0 and 100.");
        return;
    }
    if (finalsScore < 0 || finalsScore > 100) {
        showError("Finals grade must be between 0 and 100.");
        return;
    }

    
    const finalWeightedScore = (midtermScore * 0.45) + (finalsScore * 0.55);
    console.log(finalWeightedScore);

   
    const displayScore = Math.round(finalWeightedScore * 100) / 100;

    let letterGrade = "";
    let colorClass = "text-success"; 

   if (finalWeightedScore <= 74) {
        letterGrade = "Failed";
        colorClass = "text-danger";
    } else if (finalWeightedScore <= 80) {
        letterGrade = "E";
    } else if (finalWeightedScore <= 85) {
        letterGrade = "D";
    } else if (finalWeightedScore <= 90) {
        letterGrade = "C";
    } else if (finalWeightedScore <= 95) {
        letterGrade = "B";
    } else if (finalWeightedScore <= 99) {
        letterGrade = "A";
    } else {
        letterGrade = "Perfect A+";
    }

  
   outputMatrix.innerHTML ='<h5>Weighted Score: <strong>' + displayScore + '%</strong></h5>' +
                          '<h1 class="display-5 ' + colorClass + ' font-weight-bold">' + letterGrade + '</h1>';    
}


computeBtn.addEventListener("click", calculateGradePayload);
