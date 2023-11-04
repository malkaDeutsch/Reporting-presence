using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class LevelTbl
    {
        public LevelTbl()
        {
            KindergardenTbls = new HashSet<KindergardenTbl>();
        }

        public int LevelId { get; set; }
        public int FromAge { get; set; }
        public int ToAge { get; set; }

        public virtual ICollection<KindergardenTbl> KindergardenTbls { get; set; }
    }
}
