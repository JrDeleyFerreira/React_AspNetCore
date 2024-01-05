using Microsoft.EntityFrameworkCore;
using ProAtividade.API.Models;

namespace ProAtividade.API.Data;

public class DataContext : DbContext
{
    public DbSet<Atividade> Atividades { get; set; }

    public DataContext(DbContextOptions<DataContext> dbContext) : base(dbContext) { }
}
