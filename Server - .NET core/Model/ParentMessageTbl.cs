using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class ParentMessageTbl
    {
        public int ParentsMessageId { get; set; }
        public int MessageId { get; set; }
        public int? ParentId { get; set; }
        public int? KinderGardenId { get; set; }

        public virtual KindergardenTbl? KinderGarden { get; set; }
        public virtual MessageTbl Message { get; set; } = null!;
        public virtual ParenetTbl? Parent { get; set; }
    }
}
