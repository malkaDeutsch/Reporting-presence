using Microsoft.AspNetCore.Http;
using final_project.BL;
using final_project.MapperClasses;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace final_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LevelController : ControllerBase
    {
        private readonly IMapper _mapper;
        public LevelController(IMapper mapper)
        {
            this._mapper = mapper;
        }
    }
}
