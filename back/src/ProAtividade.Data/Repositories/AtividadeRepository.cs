using Microsoft.EntityFrameworkCore;
using ProAtividade.Data.Context;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories;

public class AtividadeRepository : BaseRepository, IAtividadeRepository
{
    private readonly DataContext _context;

    public AtividadeRepository(DataContext context) : base(context)
        => _context = context;

    public async Task<IEnumerable<Atividade>?> getAllAsync()
        => await _context.Atividades.AsNoTracking()
            .OrderBy(x => x.Id)
            .ToArrayAsync();

    public async Task<Atividade?> getByCodeAsync(int id)
        => await _context.Atividades.AsNoTracking()
            .FirstOrDefaultAsync(ativ => ativ.Id == id);

    public async Task<Atividade?> getByTitleAsync(string title)
        => await _context.Atividades.AsNoTracking()
            .FirstOrDefaultAsync(ativ => ativ.Titulo!.Equals(title));

}
