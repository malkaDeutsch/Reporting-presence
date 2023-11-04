using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class MessageTbl
    {
        public MessageTbl()
        {
            ParentMessageTbls = new HashSet<ParentMessageTbl>();
        }

        public int MessageId { get; set; }
        public int KindergardenId { get; set; }
        public int ChildId { get; set; }
        public string Titel { get; set; } = null!;
        public string Text { get; set; } = null!;
        public DateTime Date { get; set; }
        public bool IsRead { get; set; }
        public string FileAddress { get; set; } = null!;
        public string SendTo { get; set; } = null!;

        public virtual ChildTbl Child { get; set; } = null!;
        public virtual KindergardenTbl Kindergarden { get; set; } = null!;
        public virtual ICollection<ParentMessageTbl> ParentMessageTbls { get; set; }
    }
}
