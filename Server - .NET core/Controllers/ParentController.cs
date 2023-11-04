using Microsoft.AspNetCore.Http;
using final_project.BL;
using final_project.MapperClasses;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
namespace final_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParentController : ControllerBase
    {
        private readonly IMapper _mapper;
        public ParentController(IMapper mapper)
        {
            this._mapper = mapper;
        }
     
    }
}
