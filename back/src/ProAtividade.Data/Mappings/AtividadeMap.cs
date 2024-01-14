using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProAtividade.Domain.Entities;

namespace ProAtividade.Data.Mappings;

public class AtividadeMap : IEntityTypeConfiguration<Atividade>
{
    public void Configure(EntityTypeBuilder<Atividade> builder)
    {
        builder.ToTable("Atividades");
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Titulo).HasColumnType("varchar(100)");
        builder.Property(x => x.Descricao).HasColumnType("varchar(255)");
    }
}
