function sumOfSquareAreas(a, b) {
  return (a * a) + (b * b);
}

console.log("Sum of Square Areas Tests:");
console.log(sumOfSquareAreas(9, 3)); // 90
console.log(sumOfSquareAreas(4, 5));
console.log(sumOfSquareAreas(10, 2));

function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
  return homeworkAvg * 0.10 + quizAvg * 0.15 + examAvg * 0.75;
}

console.log("\nGrade Calculator Tests:");
console.log(gradeCalculator(100, 90, 80));
console.log(gradeCalculator(85, 88, 92));
console.log(gradeCalculator(70, 75, 80));