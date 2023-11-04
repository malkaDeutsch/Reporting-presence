using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class CorporationTbl
    {
        public CorporationTbl()
        {
            KindergardenTbls = new HashSet<KindergardenTbl>();
        }

        public int CorporationId { get; set; }
        public string CorporationName { get; set; } = null!;

        public virtual ICollection<KindergardenTbl> KindergardenTbls { get; set; }
    }
}
