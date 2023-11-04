using Microsoft.AspNetCore.Http;
using final_project.BL;
using final_project.MapperClasses;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace final_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly IMapper _mapper;
        public TeacherController(IMapper mapper)
        {
            this._mapper = mapper;
        }
        [HttpGet]
        [Route("/api/Teacher/GetTeachers")]
        public List<TeacherDTO> GetTeachers()
        {
            return this._mapper.Map<List<TeacherDTO>>(TeacherBL.GetTeachers());
        }
        [HttpGet]
        [Route("/api/Teacher/Get_KG_By_Teacher{teacherID}")]
        public List<KindergardenDTO> Get_KG_By_Teacher(int teacherID)
        {
            return this._mapper.Map<List<KindergardenDTO>>(KindergardenBL.Get_KG_By_Teacher(teacherID));
        }
        [HttpGet]
        [Route("/api/Teacher/Get_All_KG")]
        public List<KindergardenDTO> Get_All_KG()
        {
            return this._mapper.Map<List<KindergardenDTO>>(KindergardenBL.Get_All_KG());
        }

    }
}
