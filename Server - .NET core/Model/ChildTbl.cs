using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class ChildTbl
    {
        public ChildTbl()
        {
            AttendancTbls = new HashSet<AttendancTbl>();
            MessageTbls = new HashSet<MessageTbl>();
        }

        public int ChildId { get; set; }
        public string? FirstName { get; set; }
        public string LastName { get; set; } = null!;
        public string Address { get; set; } = null!;
        public int? AreaId { get; set; }
        public int Age { get; set; }
        public string Image { get; set; } = null!;
        public int ParentId { get; set; }
        public int KindergardenId { get; set; }

        public virtual AreaTbl? Area { get; set; }
        public virtual KindergardenTbl Kindergarden { get; set; } = null!;
        public virtual ParenetTbl Parent { get; set; } = null!;
        public virtual ICollection<AttendancTbl> AttendancTbls { get; set; }
        public virtual ICollection<MessageTbl> MessageTbls { get; set; }
    }
}
