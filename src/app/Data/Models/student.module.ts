import Institue from "./institute.module"

class Student {
    id?: string = ""
    First_Name: string = ""
    Last_Name: string = ""
    Institues?: Institue[] = [];
    Email: string = ""
    phone: string = ""
    Quiz_Start_Date?: string = ""
}
export default Student;