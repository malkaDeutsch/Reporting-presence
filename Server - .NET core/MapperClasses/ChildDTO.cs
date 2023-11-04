namespace final_project.MapperClasses
{
    public class ChildDTO
    {
        public int ChildId { get; set; }
        public string? FirstName { get; set; }
        public string LastName { get; set; } = null!;
        public string Address { get; set; } = null!;
        public int AreaId { get; set; }
        public int Age { get; set; }
        public string Image { get; set; } = null!;
        public int parentId { get; set; }
        public int kindergardenId { get; set; }
        public string ParentName { get; set; }
        public string KindergardenName { get; set; }
   
    }
}
