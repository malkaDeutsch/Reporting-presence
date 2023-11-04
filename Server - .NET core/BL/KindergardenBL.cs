using final_project.model;
using System.Linq;
using final_project.Model;

namespace final_project.BL
{
    public class KindergardenBL
    {
        //public static List<int> GetAllowedKG_ByTheacherID(int thecherID)
        //{
        //    List<TeacherToKindergardenTbl> list = null;
        //    list= RPContext.Context.TeacherToKindergardenTbls.Where(o => o.TeacerId == thecherID).Select(p => p).ToList();

        //    return RPContext.Context.KindergardenTbls.Where(p => list.Exists(p.KindergardenId));
        //}
        public static List<KindergardenTbl> GetAll_KG()
        {
            return RPContext.Context.KindergardenTbls.Select(p => p).ToList();

        }
        public static string GetNameById(int KG_id)
        {
            return RPContext.Context.KindergardenTbls.First(p => p.KindergardenId == KG_id).Address;

        }
        public static List<KindergardenTbl> Get_KG_By_Teacher(int teacherID)
        {
         var TeacherToKindergardenTbl = RPContext.Context.TeacherToKindergardenTbls.Where(KG => KG.TeacerId == teacherID).Select(p => p);
            List<KindergardenTbl> KindergardenList = new List<KindergardenTbl>();
            foreach(var a in TeacherToKindergardenTbl) {
            }
            return KindergardenList;

        }
        public static List<KindergardenTbl> Get_All_KG()
        {

            return RPContext.Context.KindergardenTbls.ToList(); 

        }


    }

    }

