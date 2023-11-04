using final_project.model;
using final_project.Model;

namespace final_project.BL
{
    public class CorporationBL
    {
        public static List<CityTbl> GetAllCitiesByCorporation(int corporationId)
        {
            return RPContext.Context.KindergardenTbls.Where(kg=>kg.CorporationtId==corporationId).Select(kg=>kg.City).ToList();

        }
    }
}
