namespace ProAtividade.Domain.Interfaces.Repositories;

public interface IBaseRepository
{
    void Adcionar<T>(T entity) where T : class;
    void Atualizar<T>(T entity) where T : class;
    void Deletar<T>(T entity) where T : class;
    void DeletarVarias<T>(IEnumerable<T> entities) where T : class;
    Task<bool> SalvarTodasMudancas();
}
