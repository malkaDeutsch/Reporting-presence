using Microsoft.AspNetCore.Http;
using final_project.BL;
using final_project.MapperClasses;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace final_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherToKindergardenController : ControllerBase
    {
        private readonly IMapper _mapper;
        public TeacherToKindergardenController(IMapper mapper)
        {
            this._mapper = mapper;
        }
        //[HttpGet]

        //[Route("/api/TeacherToKindergarden/getKGtoTeacher/{teacherID}")]
        //public List<TeacherToKindergardenDTO> GetKG(int teachrID)
        //{
        //    return this._mapper.Map<List<TeacherToKindergardenDTO>>(TeacherToKindergardenBL.getKGtoTeacher(teachrID));
        //}


    }
}
