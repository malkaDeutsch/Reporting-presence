namespace final_project.MapperClasses
{
    public class WorningDTO
    {
        public int WorningId { get; set; }
        public string Description { get; set; } = null!;
        public DateTime Date { get; set; }
        public int Priority { get; set; }
        public bool IsRead { get; set; }
    }
}
