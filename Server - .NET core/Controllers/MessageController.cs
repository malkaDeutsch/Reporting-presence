using Microsoft.AspNetCore.Http;
using final_project.BL;
using final_project.MapperClasses;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using final_project.model;

namespace final_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMapper _mapper;
        public MessageController(IMapper mapper)
        {
            this._mapper = mapper;
        }

        [HttpPut]
        [Route("/api/Message/SaveMessage/{message}")]

        public int SaveNewMessage(MessageDTO message)
        {
            MessageTbl messageTbl = _mapper.Map<MessageDTO, MessageTbl>(message);
            return MessageBL.SaveMessage(messageTbl);
        }
        [HttpPut]
        [Route("/api/Message/SaveParentsMessage/{parentMessage}")]
        public bool SaveParentsMessage(ParentMessageDTO parentMessage)
        {
            ParentMessageTbl parentMessageTbl = _mapper.Map<ParentMessageDTO, ParentMessageTbl>(parentMessage);
            return MessageBL.SaveParentsMessage(parentMessageTbl);
        }
        [HttpGet]
        [Route("/api/Message/Get_Message_By_kgID/{KG_id}")]
        public List<MessageDTO> Get_Messages_by_KG_ID(int KG_id)
        {
            return this._mapper.Map<List<MessageDTO>>(MessageBL.Get_Message_By_kgID(KG_id));
        }
    }
}
