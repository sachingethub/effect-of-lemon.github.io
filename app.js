// Allow the drop operation
function allowDrop(event) {
    event.preventDefault();
}

// Start the drag operation
document.getElementById("draggableItem").addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

// Handle the drop operation
function drop(event) {
    event.preventDefault();
    // Get the dragged element
    const draggedElement = event.dataTransfer.getData("text");
    const dropTarget = event.target;

    // Change background color only for valid drop targets
    if (dropTarget.id === "boxes") {
        dropTarget.style.backgroundColor = "red";
    }
}



// Function to check answers for the table
function checkAnswers() {
    // Get the input elements by their IDs
    const litmusInput = document.getElementById("litmus");
    const methylOrangeInput = document.getElementById("methyl-orange");
    const phenolphthaleinInput = document.getElementById("phenolphthalein");
    const universalIndicatorInput = document.getElementById("universal-indicator");

    // Get the values entered by the user
    const litmus = litmusInput.value.toLowerCase();
    const methylOrange = methylOrangeInput.value.toLowerCase();
    const phenolphthalein = phenolphthaleinInput.value.toLowerCase();
    const universalIndicator = universalIndicatorInput.value.toLowerCase();

    // Check if the answers are correct
    const correctAnswers = {
        litmus: "red",
        methyl_orange: "red",
        phenolphthalein: "colourless",
        universal_indicator: "red"
    };

    document.getElementById("answers").style.display = "block"; // Show the correct answers

    // Compare answers and check the correct checkboxes
    if (litmus === correctAnswers.litmus) {
        document.getElementById("litmus-correct").checked = true;
        litmusInput.style.backgroundColor = '#90EE90'; // Change background color for correct answer
    } else {
        litmusInput.style.backgroundColor = '#e63434'; // Reset to default if incorrect
    }
    if (methylOrange === correctAnswers.methyl_orange) {
        document.getElementById("methyl-orange-correct").checked = true;
        methylOrangeInput.style.backgroundColor = '#90EE90'; // Change background color for correct answer
    } else {
        methylOrangeInput.style.backgroundColor = '#e63434'; // Reset to default if incorrect
    }
    if (phenolphthalein === correctAnswers.phenolphthalein) {
        document.getElementById("phenolphthalein-correct").checked = true;
        phenolphthaleinInput.style.backgroundColor = '#90EE90'; // Change background color for correct answer
    } else {
        phenolphthaleinInput.style.backgroundColor = 'rgb(207, 33, 42)'; // Reset to default if incorrect
    }
    if (universalIndicator === correctAnswers.universal_indicator) {
        document.getElementById("universal-indicator-correct").checked = true;
        universalIndicatorInput.style.backgroundColor = '#90EE90'; // Change background color for correct answer
    } else {
        universalIndicatorInput.style.backgroundColor = 'rgb(207, 33, 42)'; // Reset to default if incorrect
    }
};

// Function to check the nature of lemon juice
function checkNature() {
    const natureInput = document.getElementById("nature");
    const nature = natureInput.value.toLowerCase();
    const correctNature = "acid";

    // Show the answer section
    document.getElementById("nature-answer").style.display = "block";

    // Check if the entered nature is correct
    if (nature === correctNature) {
        document.getElementById("nature-correct").checked = true;
        natureInput.style.backgroundColor = '#90EE90'; // Change background color for correct answer
    } else {
        natureInput.style.backgroundColor = 'rgb(207, 33, 42)'; // Reset to default if incorrect
    }
}
