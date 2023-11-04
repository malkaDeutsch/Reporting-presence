using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class CityTbl
    {
        public CityTbl()
        {
            KindergardenTbls = new HashSet<KindergardenTbl>();
        }

        public int CityId { get; set; }
        public string CityName { get; set; } = null!;

        public virtual ICollection<KindergardenTbl> KindergardenTbls { get; set; }
    }
}
