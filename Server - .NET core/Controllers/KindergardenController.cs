using Microsoft.AspNetCore.Http;
using final_project.BL;
using final_project.MapperClasses;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace final_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KindergardenController : ControllerBase
    {
        private readonly IMapper _mapper;
        public KindergardenController(IMapper mapper)
        {
            this._mapper = mapper;
        }
        [HttpGet]
        [Route("/api/Kindergarden/GetAll_KG")]
        public List<KindergardenDTO> getAll_KG()
        {
            return this._mapper.Map<List<KindergardenDTO>>(KindergardenBL.GetAll_KG());
        }
    }
}
