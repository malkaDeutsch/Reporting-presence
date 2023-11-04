using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class ParenetTbl
    {
        public ParenetTbl()
        {
            ChildTbls = new HashSet<ChildTbl>();
            ParentMessageTbls = new HashSet<ParentMessageTbl>();
        }

        public int UserId { get; set; }
        public string? FatherName { get; set; }
        public string? MotheName { get; set; }
        public string LastName { get; set; } = null!;
        public string PhoneFather { get; set; } = null!;
        public string PhoneMother { get; set; } = null!;
        public string? PhoneHome { get; set; }
        public string EmailMothr { get; set; } = null!;
        public string EmailFather { get; set; } = null!;
        public string Password { get; set; } = null!;
        public bool ResponsibiltyOfFather { get; set; }

        public virtual ICollection<ChildTbl> ChildTbls { get; set; }
        public virtual ICollection<ParentMessageTbl> ParentMessageTbls { get; set; }
    }
}
