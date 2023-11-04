using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class AttendancTbl
    {
        public int AttendancId { get; set; }
        public int KindergardenId { get; set; }
        public int ChildId { get; set; }
        public DateTime Date { get; set; }

        public virtual ChildTbl Child { get; set; } = null!;
        public virtual KindergardenTbl Kindergarden { get; set; } = null!;
    }
}
