/// <summary>
/// 測試程式
/// </summary>
public class Program
{
    public static void Main(string[] args)
    {
        int[] numbers = { 1, 2, 3, 4, 5 };

        // Map: 將每個數字加一
        var mappedNumbers = numbers.Select(x => x + 1);

        // Reduce: 將所有數字相加
        var sumResult = mappedNumbers.Sum();

        Console.WriteLine(sumResult); // 印出結果：20
    }
}
