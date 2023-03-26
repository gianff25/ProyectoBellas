using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using bellas_api.Models;

namespace bellas_api.DbContexts;

public class BellasDbContext : DbContext
{
    public BellasDbContext()
    {
    }

    public DbSet<Servicio> Servicios { get; set; }

    public DbSet<Usuario> Usuarios { get; set; }

    public DbSet<Rol> Roles { get; set; }

    public DbSet<Cita> Citas { get; set; }

    public BellasDbContext(DbContextOptions<BellasDbContext> options) : base(options)
    {
    }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //=> optionsBuilder.UseSqlServer("Data Source=DESKTOP-HCUTEOM;Initial Catalog=BellasDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }

}
