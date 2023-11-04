using Microsoft.AspNetCore.Http;
using final_project.BL;
using final_project.MapperClasses;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using System.Net.Mail;
namespace final_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChildController : ControllerBase
    {
        private readonly IMapper _mapper;
        public ChildController(IMapper mapper)
        {
            this._mapper = mapper;
        }
        [HttpGet]
        [Route("/api/Child/GetAttandanceChildren/{kinderGardendID}")]
        public List<ChildDTO> GetChildren(int kinderGardendID)
        {
            return this._mapper.Map<List<ChildDTO>>(AttendancBL.GetAttandanceChildren(kinderGardendID));
        }
        [HttpGet]
        [Route("/api/Child/GetAllChildren")]
        public List<ChildDTO> GetAllChildren()
        {
            return this._mapper.Map<List<ChildDTO>>(ChildBL.GetAllChildren());
        }
        [HttpGet]
        [Route("/api/Child/GetParentByChaild/{parentID}")]
        public List<ParentDTO> getParentOfChaild(int parentID)
        {
            return this._mapper.Map<List<ParentDTO>>(ChildBL.GetParentByChaild(parentID));
        }
        //[HttpGet]
        //[Route("/api/Child/GetKGByChaild/{KindergardenID}")]
        //public KindergardenDTO getKGOfChaild(int KindergardenID)
        //{
        //    return this._mapper.Map<KindergardenDTO>(ChildBL.GetKGByChaild(KindergardenID));
        //}

        private static bool RemoteServerCertificateValidationCallback(object sender, System.Security.Cryptography.X509Certificates.X509Certificate certificate, System.Security.Cryptography.X509Certificates.X509Chain chain, System.Net.Security.SslPolicyErrors sslPolicyErrors)
        {
            return true;
        }
        [HttpGet]
        [Route("/api/Child/sendPasswordInEmail/{clientMail}")]
        public void sendPasswordInEmail(string clientMail)
        {
            try
            {
                System.Net.ServicePointManager.ServerCertificateValidationCallback =
                new System.Net.Security.RemoteCertificateValidationCallback(RemoteServerCertificateValidationCallback);
                MailMessage mail = new MailMessage();
                mail.IsBodyHtml = true;
                mail.Body = "";
                mail.From = new MailAddress("kindergardenalerts@gmail.com");
                mail.Subject = "האתר smarTor שולח לך את סיסמת המוסד שלך";
                mail.To.Add(clientMail);

                SmtpClient smtp = new SmtpClient();
                smtp.Port = 587;
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                smtp.Credentials = new System.Net.NetworkCredential("kindergardenalerts@gmail.com", "nkfhjuh123");
                smtp.Send(mail);


            }
            catch
            {
                throw new Exception("כתובת מייל לא קיימת אנא נסה שוב");

            }

        }

    }

}
