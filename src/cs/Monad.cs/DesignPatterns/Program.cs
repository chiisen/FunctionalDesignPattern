class Monad
{
    public int Value { get; }

    public Monad(int value)
    {
        Value = value;
    }

    public Monad Bind(Func<int, Monad> func)
    {
        return func(Value);
    }
}
/// <summary>
/// 測試程式
/// </summary>
public class Program
{
    public static void Main(string[] args)
    {
        Func<int, Monad> doubleFunc = (value) =>
        {
            return new Monad(value * 2);
        };

        var result = new Monad(3).Bind(doubleFunc);
        Console.WriteLine(result.Value); // 印出結果：6
    }
}
