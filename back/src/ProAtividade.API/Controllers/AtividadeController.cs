using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ProAtividade.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AtividadeController : ControllerBase
{
	[HttpGet]
	public string Get() => "";

	[HttpGet("{id}")]
	public string Get(int id) => "";

	[HttpPost]
	public string Post() => "";

	[HttpPut("{id}")]
	public string Put(int id) => "";

	[HttpDelete("{id}")]
	public string Delete(int id) => "";
}
