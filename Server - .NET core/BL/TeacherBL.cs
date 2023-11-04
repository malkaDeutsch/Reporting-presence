using final_project.model;
using final_project.Model;

namespace final_project.BL
{
    public class TeacherBL
    {
        public static List<TeacherTbl> GetTeachers()
        {
            return RPContext.Context.TeacherTbls.ToList();

        }



    }
}
