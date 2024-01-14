using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Services;

public interface IAtividadeService
{
    Task<Atividade?> AddAtividadeAsync(Atividade atividade);
    Task<Atividade?> AtualizarAtividadeAsync(Atividade atividade);
    Task<IEnumerable<Atividade>?> PegarTodasAtividadesAsync();
    Task<Atividade?> PegarAtividadePorIdAsync(int id);
    Task<bool> DeletarAtividadeAsync(int id);
    Task<bool> ConcluirAtividadeAsync(Atividade atividade);
}
