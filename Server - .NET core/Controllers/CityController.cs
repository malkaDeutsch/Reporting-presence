using Microsoft.AspNetCore.Http;
using final_project.BL;
using final_project.MapperClasses;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
namespace final_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly IMapper _mapper;
        public CityController(IMapper mapper)
        {
            this._mapper = mapper;
        }
        [HttpGet]
        [Route("/api/City/ReturnCitiesBY_ID/{cityID}")]
        public List<CityDTO> getParentOfChaild(int cityID)
        {
            return this._mapper.Map<List<CityDTO>>(CityBL.ReturnCitiesBY_ID(cityID));
        }
        [HttpGet]
        [Route("/api/City/GetCityByCorpration/{corporationID}")]
        public List<CityDTO> get_cities_by_corporation(int corporationID)
        {
            return this._mapper.Map<List<CityDTO>>(CityBL.GetCityByCorpration(corporationID));
        }
    }
}
