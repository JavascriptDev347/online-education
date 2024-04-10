export interface IAdminApiClientUrls {
    getAllStudents: string
    getStudentById: string
    createStudent: string
    editStudent: string
    searchStudent: string
    deleteStudent: string

    getAllTeachers: string
    searchTeacher: string

    getAllCourses: string
    createCourse: string
    editCourse: string
    deleteCourse: string

    getAllRooms: string

    getAllGroups: string
    addGroupStudent: string
    addGroupTeacher: string
    groupAllStudents: string
    deleteGroupIdStudent: string

}