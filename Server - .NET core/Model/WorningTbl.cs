using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class WorningTbl
    {
        public int WorningId { get; set; }
        public string Description { get; set; } = null!;
        public DateTime Date { get; set; }
        public int Priority { get; set; }
        public bool IsRead { get; set; }
        public bool? IsAttandance { get; set; }
    }
}
