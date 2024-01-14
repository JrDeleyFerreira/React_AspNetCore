using ProAtividade.Data.Context;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories;

public class BaseRepository : IBaseRepository
{
    private readonly DataContext _context;

    public BaseRepository(DataContext context)
        => _context = context;

    public void Adcionar<T>(T entity) where T : class
        => _context.AddAsync(entity);

    public void Atualizar<T>(T entity) where T : class
        => _context.Update(entity);

    public void Deletar<T>(T entity) where T : class
        => _context.Remove(entity);

    public void DeletarVarias<T>(IEnumerable<T> entities) where T : class
        => _context.RemoveRange(entities);

    public async Task<bool> SalvarTodasMudancas()
        => await _context.SaveChangesAsync() > 0;
}
