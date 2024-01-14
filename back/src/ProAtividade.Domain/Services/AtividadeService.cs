using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;
using ProAtividade.Domain.Interfaces.Services;

namespace ProAtividade.Domain.Services;

public class AtividadeService : IAtividadeService
{
    private readonly IAtividadeRepository _repository;

    public AtividadeService(IAtividadeRepository repository)
    {
        _repository = repository;
    }

    public async Task<Atividade?> AddAtividadeAsync(Atividade atividade)
    {
        if (await _repository.getByTitleAsync(atividade.Titulo!) is not null)
            throw new Exception("Já existe uma atividade com esse título!");

        if (await _repository.getByCodeAsync(atividade.Id) is null)
        {
            _repository.Adcionar(atividade);
            if (await _repository.SalvarTodasMudancas())
                return atividade;
        }

        return null;
    }

    public async Task<Atividade?> AtualizarAtividadeAsync(Atividade atividade)
    {
        if (atividade.DataConclusao is not null)
            throw new Exception("Não se pode alterar atividade já concluída!");

        if (await _repository.getByCodeAsync(atividade.Id) is not null)
        {
            _repository.Atualizar(atividade);
            if (await _repository.SalvarTodasMudancas())
                return atividade;
        }

        return null;
    }

    public async Task<bool> ConcluirAtividadeAsync(Atividade atividade)
    {
        if (atividade is not null)
        {
            atividade.Concluir();
            _repository.Atualizar(atividade);
            return await _repository.SalvarTodasMudancas();
        }

        return false;
    }

    public async Task<bool> DeletarAtividadeAsync(int id)
    {
        var atividade = await _repository.getByCodeAsync(id);

        if (atividade is null)
            throw new Exception("Atividade que tentou deletar não existe!");

        _repository.Deletar(atividade);
        return await _repository.SalvarTodasMudancas();
    }

    public async Task<Atividade?> PegarAtividadePorIdAsync(int id)
    {
        try
        {
            var atividade = await _repository.getByCodeAsync(id);
            return atividade ?? null;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    public async Task<IEnumerable<Atividade>?> PegarTodasAtividadesAsync()
    {
        try
        {
            var atividades = await _repository.getAllAsync();
            return atividades ?? null;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
}
