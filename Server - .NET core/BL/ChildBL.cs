using final_project.model;
using final_project.Model;

namespace final_project.BL
{
    public class ChildBL
    {
        public static List<ChildTbl> GetAllChildren()
        {
            return RPContext.Context.ChildTbls.ToList();

        }
        public static List<ParenetTbl> GetParentByChaild(int parentID)
        {
            return RPContext.Context.ParenetTbls.Where(o => o.UserId == parentID).Select(p => p).ToList();

        }
        //public static KindergardenTbl GetKGByChaild(int KindergardenID)
        //{
        //    return RPContext.Context.KindergardenTbls.FirstOrDefault(o => o.KindergardenId == KindergardenID);

        //}
    }
}
