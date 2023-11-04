using AutoMapper;
using final_project.model;
using final_project.BL;
namespace final_project.MapperClasses
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<ParenetTbl, ParentDTO>();
            CreateMap<CityTbl, CityDTO>();
            CreateMap<CorporationTbl, CorporationDTO>();
            CreateMap<KindergardenTbl, KindergardenDTO>();
            CreateMap<LevelTbl, LevelDTO>();
            CreateMap<MessageTbl, MessageDTO>();
            CreateMap<TeacherTbl, TeacherDTO>();
            CreateMap<TeacherToKindergardenTbl, TeacherToKindergardenDTO>();
            CreateMap<WorningTbl, WorningDTO>();
            CreateMap<AreaTbl, AreaDTO>();
            CreateMap<AttendancTbl, AttendancDTO>();
            CreateMap<ChildTbl, ChildDTO>()
                .ForMember(dest => dest.ParentName, opt => opt.MapFrom(src => src.Parent.ResponsibiltyOfFather ? src.Parent.FatherName : src.Parent.MotheName))
                .ForMember(dest => dest.KindergardenName, opt => opt.MapFrom(src => src.Kindergarden.Address));
            CreateMap<MessageDTO, MessageTbl>();
            CreateMap<ParentMessageDTO, ParentMessageTbl>();

        }

    }
}
