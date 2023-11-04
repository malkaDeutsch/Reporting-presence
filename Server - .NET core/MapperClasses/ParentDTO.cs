namespace final_project.MapperClasses
{
    public class ParentDTO
    {
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
    }
}
