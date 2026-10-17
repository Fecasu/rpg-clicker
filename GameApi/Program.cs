var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

Player player = new Player();

player.Name = "Fabian";
player.Gold = 0;
player.Damage = 10;
int monsterHP = 100;
int monsterArmor = 5;
int hit = player.CalculateDamage()

Console.WriteLine(player.Name);
Console.WriteLine($"Gold: {player.Gold}");

app.Run();