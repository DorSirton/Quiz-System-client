
import AnswerQuestion from './answerQuestions'

class StudentQuiz {
    Id?: string = ""
    Quiz_Id: string = ""
    Student_Id: string = ""
    CreatedDate?: string = ""
    EndDate?: string = ""
    AnswerQustiones?: AnswerQuestion[] = []
}
export default StudentQuiz;