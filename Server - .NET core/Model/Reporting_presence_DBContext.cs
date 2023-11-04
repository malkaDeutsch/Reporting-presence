using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace final_project.model
{
    public partial class Reporting_presence_DBContext : DbContext
    {
        public Reporting_presence_DBContext()
        {
        }

        public Reporting_presence_DBContext(DbContextOptions<Reporting_presence_DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AreaTbl> AreaTbls { get; set; } = null!;
        public virtual DbSet<AttendancTbl> AttendancTbls { get; set; } = null!;
        public virtual DbSet<ChildTbl> ChildTbls { get; set; } = null!;
        public virtual DbSet<CityTbl> CityTbls { get; set; } = null!;
        public virtual DbSet<CorporationTbl> CorporationTbls { get; set; } = null!;
        public virtual DbSet<KindergardenTbl> KindergardenTbls { get; set; } = null!;
        public virtual DbSet<LevelTbl> LevelTbls { get; set; } = null!;
        public virtual DbSet<MessageTbl> MessageTbls { get; set; } = null!;
        public virtual DbSet<ParenetTbl> ParenetTbls { get; set; } = null!;
        public virtual DbSet<ParentMessageTbl> ParentMessageTbls { get; set; } = null!;
        public virtual DbSet<TeacherTbl> TeacherTbls { get; set; } = null!;
        public virtual DbSet<TeacherToKindergardenTbl> TeacherToKindergardenTbls { get; set; } = null!;
        public virtual DbSet<WorningTbl> WorningTbls { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server= (LocalDB)\\MSSQLLocalDB;Database= Reporting_presence_DB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AreaTbl>(entity =>
            {
                entity.HasKey(e => e.AreaId);

                entity.ToTable("Area_tbl");

                entity.Property(e => e.AreaId).HasColumnName("area_id");

                entity.Property(e => e.AreaName)
                    .HasMaxLength(50)
                    .HasColumnName("area_name");
            });

            modelBuilder.Entity<AttendancTbl>(entity =>
            {
                entity.HasKey(e => e.AttendancId);

                entity.ToTable("Attendanc_tbl");

                entity.Property(e => e.AttendancId).HasColumnName("attendanc_id");

                entity.Property(e => e.ChildId).HasColumnName("child_id");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.KindergardenId).HasColumnName("kindergarden_id");

                entity.HasOne(d => d.Child)
                    .WithMany(p => p.AttendancTbls)
                    .HasForeignKey(d => d.ChildId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Attendanc_tbl_Child_tbl");

                entity.HasOne(d => d.Kindergarden)
                    .WithMany(p => p.AttendancTbls)
                    .HasForeignKey(d => d.KindergardenId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Attendanc_tbl_Kindergarden_tbl");
            });

            modelBuilder.Entity<ChildTbl>(entity =>
            {
                entity.HasKey(e => e.ChildId)
                    .HasName("PK_CHILD_TBL");

                entity.ToTable("Child_tbl");

                entity.Property(e => e.ChildId).HasColumnName("child_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .HasColumnName("address");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.AreaId).HasColumnName("area_id");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .HasColumnName("first_name");

                entity.Property(e => e.Image)
                    .HasMaxLength(100)
                    .HasColumnName("image");

                entity.Property(e => e.KindergardenId).HasColumnName("kindergarden_id");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .HasColumnName("last_name");

                entity.Property(e => e.ParentId).HasColumnName("parent_id");

                entity.HasOne(d => d.Area)
                    .WithMany(p => p.ChildTbls)
                    .HasForeignKey(d => d.AreaId)
                    .HasConstraintName("FK_Child_tbl_Area_tbl");

                entity.HasOne(d => d.Kindergarden)
                    .WithMany(p => p.ChildTbls)
                    .HasForeignKey(d => d.KindergardenId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Child_tbl_Kindergarden_tbl");

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.ChildTbls)
                    .HasForeignKey(d => d.ParentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Child_tbl_Parenet_tbl");
            });

            modelBuilder.Entity<CityTbl>(entity =>
            {
                entity.HasKey(e => e.CityId)
                    .HasName("PK_City_tbl_1");

                entity.ToTable("City_tbl");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.CityName)
                    .HasMaxLength(50)
                    .HasColumnName("city_name");
            });

            modelBuilder.Entity<CorporationTbl>(entity =>
            {
                entity.HasKey(e => e.CorporationId);

                entity.ToTable("Corporation_tbl");

                entity.Property(e => e.CorporationId).HasColumnName("corporation_id");

                entity.Property(e => e.CorporationName)
                    .HasMaxLength(50)
                    .HasColumnName("corporation_name");
            });

            modelBuilder.Entity<KindergardenTbl>(entity =>
            {
                entity.HasKey(e => e.KindergardenId);

                entity.ToTable("Kindergarden_tbl");

                entity.Property(e => e.KindergardenId).HasColumnName("kindergarden_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(100)
                    .HasColumnName("address");

                entity.Property(e => e.AreaId).HasColumnName("area_id");

                entity.Property(e => e.CityId).HasColumnName("cityID");

                entity.Property(e => e.CorporationtId).HasColumnName("corporationt_id");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Kind)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("kind");

                entity.Property(e => e.LayerId).HasColumnName("layer_id");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.Phone)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("phone");

                entity.HasOne(d => d.Area)
                    .WithMany(p => p.KindergardenTbls)
                    .HasForeignKey(d => d.AreaId)
                    .HasConstraintName("FK_Kindergarden_tbl_Area_tbl");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.KindergardenTbls)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Kindergarden_tbl_City_tbl");

                entity.HasOne(d => d.Corporationt)
                    .WithMany(p => p.KindergardenTbls)
                    .HasForeignKey(d => d.CorporationtId)
                    .HasConstraintName("FK_Kindergarden_tbl_Corporation_tbl");

                entity.HasOne(d => d.Layer)
                    .WithMany(p => p.KindergardenTbls)
                    .HasForeignKey(d => d.LayerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Kindergarden_tbl_Level_tbl");
            });

            modelBuilder.Entity<LevelTbl>(entity =>
            {
                entity.HasKey(e => e.LevelId);

                entity.ToTable("Level_tbl");

                entity.Property(e => e.LevelId).HasColumnName("level_id");

                entity.Property(e => e.FromAge).HasColumnName("from_age");

                entity.Property(e => e.ToAge).HasColumnName("to_age");
            });

            modelBuilder.Entity<MessageTbl>(entity =>
            {
                entity.HasKey(e => e.MessageId);

                entity.ToTable("Message_tbl");

                entity.Property(e => e.MessageId).HasColumnName("message_id");

                entity.Property(e => e.ChildId).HasColumnName("child_id");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.FileAddress)
                    .HasMaxLength(50)
                    .HasColumnName("file_address");

                entity.Property(e => e.IsRead).HasColumnName("is_read");

                entity.Property(e => e.KindergardenId).HasColumnName("kindergarden_id");

                entity.Property(e => e.SendTo)
                    .HasMaxLength(50)
                    .HasColumnName("send_to");

                entity.Property(e => e.Text)
                    .HasMaxLength(200)
                    .HasColumnName("text");

                entity.Property(e => e.Titel)
                    .HasMaxLength(50)
                    .HasColumnName("titel");

                entity.HasOne(d => d.Child)
                    .WithMany(p => p.MessageTbls)
                    .HasForeignKey(d => d.ChildId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Message_tbl_Child_tbl");

                entity.HasOne(d => d.Kindergarden)
                    .WithMany(p => p.MessageTbls)
                    .HasForeignKey(d => d.KindergardenId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Message_tbl_Kindergarden_tbl");
            });

            modelBuilder.Entity<ParenetTbl>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("Parenet_tbl");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.EmailFather)
                    .HasMaxLength(50)
                    .HasColumnName("email_father");

                entity.Property(e => e.EmailMothr)
                    .HasMaxLength(50)
                    .HasColumnName("email_mothr");

                entity.Property(e => e.FatherName)
                    .HasMaxLength(50)
                    .HasColumnName("father_name");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .HasColumnName("last_name");

                entity.Property(e => e.MotheName)
                    .HasMaxLength(50)
                    .HasColumnName("mothe_name");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .HasColumnName("password");

                entity.Property(e => e.PhoneFather)
                    .HasMaxLength(50)
                    .HasColumnName("phone_father");

                entity.Property(e => e.PhoneHome)
                    .HasMaxLength(50)
                    .HasColumnName("phone_home");

                entity.Property(e => e.PhoneMother)
                    .HasMaxLength(50)
                    .HasColumnName("phone_mother");

                entity.Property(e => e.ResponsibiltyOfFather).HasColumnName("responsibilty_of_father");
            });

            modelBuilder.Entity<ParentMessageTbl>(entity =>
            {
                entity.HasKey(e => e.ParentsMessageId);

                entity.ToTable("ParentMessage_tbl");

                entity.Property(e => e.ParentsMessageId)
                    .ValueGeneratedNever()
                    .HasColumnName("ParentsMessageID");

                entity.Property(e => e.KinderGardenId).HasColumnName("KinderGardenID");

                entity.Property(e => e.MessageId).HasColumnName("MessageID");

                entity.Property(e => e.ParentId).HasColumnName("ParentID");

                entity.HasOne(d => d.KinderGarden)
                    .WithMany(p => p.ParentMessageTbls)
                    .HasForeignKey(d => d.KinderGardenId)
                    .HasConstraintName("FK_ParentMessage_tbl_Kindergarden_tbl");

                entity.HasOne(d => d.Message)
                    .WithMany(p => p.ParentMessageTbls)
                    .HasForeignKey(d => d.MessageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ParentMessage_tbl_Message_tbl");

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.ParentMessageTbls)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("FK_ParentMessage_tbl_Parenet_tbl");
            });

            modelBuilder.Entity<TeacherTbl>(entity =>
            {
                entity.HasKey(e => e.TeacherId);

                entity.ToTable("Teacher_tbl");

                entity.Property(e => e.TeacherId).HasColumnName("teacher_id");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .HasColumnName("first_name");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .HasColumnName("last_name");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .HasColumnName("password");

                entity.Property(e => e.Phone)
                    .HasMaxLength(50)
                    .HasColumnName("phone");

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .HasColumnName("userName");
            });

            modelBuilder.Entity<TeacherToKindergardenTbl>(entity =>
            {
                entity.HasKey(e => new { e.TeacerId, e.KindergardenId });

                entity.ToTable("TeacherToKindergarden_tbl");

                entity.Property(e => e.TeacerId).HasColumnName("teacer_id");

                entity.Property(e => e.KindergardenId).HasColumnName("kindergarden_id");
            });

            modelBuilder.Entity<WorningTbl>(entity =>
            {
                entity.HasKey(e => e.WorningId);

                entity.ToTable("Worning_tbl");

                entity.Property(e => e.WorningId).HasColumnName("worning_id");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.Description)
                    .HasMaxLength(50)
                    .HasColumnName("description");

                entity.Property(e => e.IsAttandance).HasColumnName("isAttandance");

                entity.Property(e => e.IsRead).HasColumnName("is_read");

                entity.Property(e => e.Priority).HasColumnName("priority");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
