using final_project.model;
using final_project.Model;

namespace final_project.BL
{
    public class MessageBL
    {
        public static int SaveMessage(MessageTbl message)
        {
            try
            {
                RPContext.Context.MessageTbls.Add(message);
                RPContext.Context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return RPContext.Context.MessageTbls.Last().MessageId;
        }
        public static bool SaveParentsMessage(ParentMessageTbl parentMessage)
        {
            try
            {
                RPContext.Context.ParentMessageTbls.Add(parentMessage);
                RPContext.Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static List<MessageTbl> Get_Message_By_kgID(int KG_id)
        {
            return RPContext.Context.MessageTbls.Where(p=> p.KindergardenId.Equals(KG_id)).ToList();

        }
    }
}
