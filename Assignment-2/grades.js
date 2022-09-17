function getGrades(marks){
    let grade = '';

    switch(true){
        case (marks<0):
            grade = 'Invalid Marks';
            break;
        case (marks<40):
            grade = 'Failed';
            break;
        case (marks<50):
            grade = 'E';
            break;
        case (marks<60):
            grade = 'D';
            break;
        case (marks<70):
            grade = 'C';
            break;
        case (marks<80):
            grade = 'B';
            break;        
        case (marks<90):
            grade = 'A';
            break;
        case (marks<=100):
            grade = 'S';
            break;    
    }
    return grade;
}

console.log(getGrades(92));
console.log(getGrades(64));
console.log(getGrades(25));
console.log(getGrades(-2));
