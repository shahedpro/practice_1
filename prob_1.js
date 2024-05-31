function calculateGrade(score) {
    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Please enter a valid score between 0 and 100.");
        return;
    }

    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log(`Your grade is: ${grade}`);
}

const score = prompt("Enter your score:");
calculateGrade(parseFloat(score));
