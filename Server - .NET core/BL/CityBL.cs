
using final_project.model;
using final_project.Model;

namespace final_project.BL
{
    public class CityBL
    {
        public static List<CityTbl> ReturnCitiesBY_ID(int cityID)
        {
            return RPContext.Context.CityTbls.Where(v => v.CityId == cityID).ToList();
        }
        public static List<CityTbl> GetCityByCorpration(int CorprationID)
        {
            List<int> listCity = new List<int>();
            listCity = RPContext.Context.KindergardenTbls.Where(y => y.CorporationtId == CorprationID).Select(p => p.CityId).ToList();
            return RPContext.Context.CityTbls.Where(y => listCity.Contains(y.CityId)).Select(p => p).ToList();

        }
    }
}