using Microsoft.AspNetCore.Mvc;
using ProAtividade.Domain.Entities;

namespace ProAtividade.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AtividadeController : ControllerBase
{
	private readonly IAtividadeService _service;

	public AtividadeController(IAtividadeService service)
		=> _service = service;

	[HttpGet]
	public async Task<IActionResult> Get()
	{
		try
		{
			var atividades = await _service.PegarTodasAtividadesAsync();
			return atividades is not null ? Ok(atividades) : NoContent();
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError,
				$"Erro ao tentar recuperar Atividades. Erro: {ex.Message}");
		}
	}

	[HttpGet("{id}")]
	public async Task<IActionResult> Get(int id)
	{
		try
		{
			var atividade = await _service.PegarAtividadePorIdAsync(id);
			return atividade is not null ? Ok(atividade) : NoContent();
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError,
				$"Erro ao tentar recuperar Atividade com ID: {id}. Erro: {ex.Message}");
		}
	}

	[HttpPost]
	public async Task<IActionResult> Post(Atividade atividade)
	{
		try
		{
			var entity = await _service.AddAtividadeAsync(atividade);
			return entity is not null ? Ok(entity) : NoContent();
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError,
				$"Erro ao tentar adicionar Atividade. Erro: {ex.Message}");
		}
	}

	[HttpPut("{id}")]
	public async Task<IActionResult> Put(Atividade atividade)
	{
		try
		{
			var entity = await _service.AtualizarAtividadeAsync(atividade);

			if (entity is null)
				return StatusCode(StatusCodes.Status409Conflict,
					$"Atividade de ID: {atividade.Id}, não encontrada!");

			return Ok(atividade);
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError,
				$"Erro ao tentar atualizar Atividade com ID: {atividade.Id}. Erro: {ex.Message}");
		}
	}

	[HttpDelete("{id}")]
	public async Task<IActionResult> Delete(int id)
	{
		try
		{
			var atividade = await _service.PegarAtividadePorIdAsync(id);

			if (atividade is null)
				return StatusCode(StatusCodes.Status409Conflict,
					$"Atividade de ID: {id} não encontrada!");

			return await _service.DeletarAtividadeAsync(id)
				? Ok(new { message = "Deletado" })
				: BadRequest("Ocorreu um problema não especificado ao tentar deletar.");
		}
		catch (Exception ex)
		{
			return StatusCode(StatusCodes.Status500InternalServerError,
				$"Erro ao tentar deletar Atividade com ID: {id}. Erro: {ex.Message}");
		}
	}
}
