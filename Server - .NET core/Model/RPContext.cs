using final_project.model;
namespace final_project.Model
{
    public class RPContext : IDisposable
    {
        private static Reporting_presence_DBContext context;

        public static Reporting_presence_DBContext Context
        {
            get { return context; }
            set { if (context == null) context = value; }
        }

        static RPContext()
        {
            context = new Reporting_presence_DBContext();
            context.ParenetTbls.ToList();
            context.KindergardenTbls.ToList();
            context.CityTbls.ToList();
        }

        public void Dispose()
        {
            context.Dispose();
        }
    }
}
