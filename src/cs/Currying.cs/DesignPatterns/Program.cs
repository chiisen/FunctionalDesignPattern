/// <summary>
/// 測試程式
/// </summary>
public class Program
{
    public static void Main(string[] args)
    {
        Func<int, Func<int, int>> add = (x) =>
        {
            return (y) => x + y;
        };

        var addFive = add(5);
        var result = addFive(3);
        Console.WriteLine(result); // 印出結果：8
    }
}
