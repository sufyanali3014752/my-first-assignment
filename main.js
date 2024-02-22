var score = 74;
var grade;
if (score >= 80 && score <= 100) {
    grade = 'A1';
}
else if (score >= 70 && score <= 79) {
    grade = 'A';
}
else if (score >= 60 && score <= 69) {
    grade = 'B';
}
else if (score >= 50 && score <= 59) {
    grade = 'c';
}
else if (score >= 50 && score <= 59) {
    grade = 'D';
}
else if (score >= 40 && score <= 49) {
    grade = 'F';
}
console.log("Accroding to your score, your grade was:", grade);
