using System;
using System.Collections.Generic;

namespace final_project.model
{
    public partial class TeacherTbl
    {
        public int TeacherId { get; set; }
        public string? FirstName { get; set; }
        public string LastName { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string? UserName { get; set; }
    }
}
