using ProAtividade.Domain.Utils;

namespace ProAtividade.Domain.Entities;

public class Atividade
{
    public int Id { get; set; }
    public string? Titulo { get; set; }
    public string? Descricao { get; set; }
    public Prioridade Prioridade { get; set; }
    public DateTime DataCriacao { get; set; }
    public DateTime? DataConclusao { get; set; }

    public Atividade() => DataCriacao = DateTime.UtcNow;

    public Atividade(int id, string? titulo, string? descricao) : this()
    {
        Id = id;
        Titulo = titulo;
        Descricao = descricao;
    }

    public void Concluir()
    {
        if (DataConclusao is null)
            DataConclusao = DateTime.UtcNow;
        else
            throw new Exception($"Atividade já concluída em {DataConclusao?.ToString("dd/MM/yyyy")}");
    }
}
