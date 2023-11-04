namespace final_project.MapperClasses
{
    public class KindergardenDTO
    {
        public int KindergardenId { get; set; }
        public string Address { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Email { get; set; } = null!;
        public int LayerId { get; set; }
        public int AreaId { get; set; }
        public string? Kind { get; set; }
        public string Password { get; set; } = null!;
        public int? CorporationtId { get; set; }
    }
}
