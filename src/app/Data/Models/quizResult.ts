interface QuizResult {
    quizName: string;
    grade: number;
    passed: boolean;
    totalQuestions: number;
    correntStudentAnswer: number;
    passingGrade: number;
}
export default QuizResult;