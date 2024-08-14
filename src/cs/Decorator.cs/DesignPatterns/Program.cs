/// <summary>
/// 測試程式
/// </summary>
public class Program
{
    public static void Main(string[] args)
    {
        Func<Func<string, string>, Func<string, string>> uppercaseDecorator = (func) =>
        {
            return (text) =>
            {
                var result = func(text);
                return result.ToUpper();
            };
        };

        Func<string, string> greet = uppercaseDecorator((name) =>
        {
            return $"Hello, {name}";
        });

        Console.WriteLine(greet("Alice")); // 印出結果：HELLO, ALICE
    }
}
