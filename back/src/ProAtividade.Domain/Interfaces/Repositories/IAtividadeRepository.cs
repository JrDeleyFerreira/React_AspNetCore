using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Repositories;

public interface IAtividadeRepository : IBaseRepository
{
    Task<IEnumerable<Atividade>?> getAllAsync();
    Task<Atividade?> getByCodeAsync(int id);
    Task<Atividade?> getByTitleAsync(string title);
}
