using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AtividadeController : ControllerBase
{
	private readonly DataContext _dataContext;

	public AtividadeController(DataContext dataContext)
		=> _dataContext = dataContext;

	[HttpGet]
	public IEnumerable<Atividade> Get()
		=> _dataContext.Atividades;

	[HttpGet("{id}")]
	public Atividade? Get(int id)
		=> _dataContext.Atividades.FirstOrDefault(x => x.Id == id);

	[HttpPost]
	public Atividade? Post(Atividade atividade)
	{
		_dataContext.Add(atividade);

		if (_dataContext.SaveChanges() > 0)
			return _dataContext.Atividades.FirstOrDefault(x => x.Id == atividade.Id);
		else
			throw new Exception("Atividade não adicionada");
	}

	[HttpPut("{id}")]
	public Atividade? Put(int id, Atividade atividade)
	{
		if (atividade.Id != id)
			throw new Exception("Tentativa de atualizar Atividade diferente!");

		_dataContext.Update(atividade);

		if (_dataContext.SaveChanges() > 0)
			return _dataContext.Atividades.FirstOrDefault(ativ => ativ.Id == id);
		else
			return null;
	}

	[HttpDelete("{id}")]
	public bool Delete(int id)
	{
		var atividade = _dataContext.Atividades.FirstOrDefault(ativ => ativ.Id == id);

		if (atividade is null)
			throw new Exception("Atividade não encontrada! Informe um ID válido.");

		_dataContext.Remove(atividade);

		return _dataContext.SaveChanges() > 0;
	}
}
