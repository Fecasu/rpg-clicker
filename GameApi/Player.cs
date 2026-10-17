public class Player
{
    public string Name {get; set;} = "";
    public int Gold {get; set;}
    public int Damage {get; set;}
    public void AddGold()
    {
        Gold = Gold + 10;
    }

    public int CalculateDamage(int baseDamage, int armor)
    {
        int finalDamage = baseDamage - armor;
        return finalDamage;
    }
}