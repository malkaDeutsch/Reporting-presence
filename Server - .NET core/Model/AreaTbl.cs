using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class AreaTbl
    {
        public AreaTbl()
        {
            ChildTbls = new HashSet<ChildTbl>();
            KindergardenTbls = new HashSet<KindergardenTbl>();
        }

        public int AreaId { get; set; }
        public string AreaName { get; set; } = null!;

        public virtual ICollection<ChildTbl> ChildTbls { get; set; }
        public virtual ICollection<KindergardenTbl> KindergardenTbls { get; set; }
    }
}
