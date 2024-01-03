using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.API.Models;

public class Atividade
{
    public int id { get; set; }
    public string? Titulo { get; set; }
    public int Prioridade { get; set; }
    public string? Descricao { get; set; }
}
