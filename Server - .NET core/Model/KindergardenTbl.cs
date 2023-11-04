using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class KindergardenTbl
    {
        public KindergardenTbl()
        {
            AttendancTbls = new HashSet<AttendancTbl>();
            ChildTbls = new HashSet<ChildTbl>();
            MessageTbls = new HashSet<MessageTbl>();
            ParentMessageTbls = new HashSet<ParentMessageTbl>();
        }

        public int KindergardenId { get; set; }
        public string Address { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Email { get; set; } = null!;
        public int LayerId { get; set; }
        public int? AreaId { get; set; }
        public string? Kind { get; set; }
        public string Password { get; set; } = null!;
        public int? CorporationtId { get; set; }
        public int CityId { get; set; }

        public virtual AreaTbl? Area { get; set; }
        public virtual CityTbl City { get; set; } = null!;
        public virtual CorporationTbl? Corporationt { get; set; }
        public virtual LevelTbl Layer { get; set; } = null!;
        public virtual ICollection<AttendancTbl> AttendancTbls { get; set; }
        public virtual ICollection<ChildTbl> ChildTbls { get; set; }
        public virtual ICollection<MessageTbl> MessageTbls { get; set; }
        public virtual ICollection<ParentMessageTbl> ParentMessageTbls { get; set; }
    }
}
