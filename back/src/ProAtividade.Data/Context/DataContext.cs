using Microsoft.EntityFrameworkCore;
using ProAtividade.Data.Mappings;
using ProAtividade.Domain.Entities;

namespace ProAtividade.Data.Context;

public class DataContext : DbContext
{
    public DbSet<Atividade> Atividades { get; set; }

    public DataContext(DbContextOptions<DataContext> dbContext) : base(dbContext) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new AtividadeMap());
    }
}
