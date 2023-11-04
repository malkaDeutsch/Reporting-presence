using Microsoft.AspNetCore.Http;
using final_project.BL;
using final_project.MapperClasses;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace final_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CorporationController : ControllerBase
    {
        private readonly IMapper _mapper;
        public CorporationController(IMapper mapper)
        {
            this._mapper = mapper;
        }
        [HttpGet]
        [Route("/api/Corporation/Get_All_Cities_By_Corporation")]
        public List<CityDTO> Get_All_Cities_By_Corporation(int corporationId)
        {
            return this._mapper.Map<List<CityDTO>>(CorporationBL.GetAllCitiesByCorporation(corporationId));
        }

    }
}
