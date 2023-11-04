using final_project.model;
using final_project.Model;
using System.Linq;
namespace final_project.BL
{
    public class AttendancBL
    {
        public static List<ChildTbl> GetAttandanceChildren(int kinderGardendID)
        {
            return RPContext.Context.ChildTbls.Where(ch => ch.KindergardenId == kinderGardendID).ToList();

        }
    }
}
