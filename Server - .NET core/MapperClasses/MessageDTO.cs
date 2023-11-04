namespace final_project.MapperClasses
{
    public class MessageDTO
    {
        public int MessageId { get; set; }
        public int KindergardenId { get; set; }
        public int ChildId { get; set; }
        public string Titel { get; set; } = null!;
        public string Text { get; set; } = null!;
        public DateTime Date { get; set; }
        public bool IsRead { get; set; }
        public string FileAddress { get; set; } = null!;
        public string SendTo { get; set; } = null!;
        // list of ids parents
        //kinderGardenID
    }
}
