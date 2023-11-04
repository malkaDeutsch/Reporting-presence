namespace final_project.MapperClasses
{
    public class TeacherDTO
    {
        public int TeacherId { get; set; }
        public string? FirstName { get; set; }
        public string LastName { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
