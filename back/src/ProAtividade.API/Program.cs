using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using ProAtividade.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
	.AddJsonOptions
	(
		options =>
		{
			options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
		}
	);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>(
  options => options.UseSqlite(builder.Configuration.GetConnectionString("Default"))
);

// Adição do serviço de cors (Integração)
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Permissões de interação com front-end
app.UseCors(
	options => options.AllowAnyHeader()
						.AllowAnyMethod()
						.AllowAnyOrigin()
);

app.Run();
