using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lijsten_tryout
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> namen = new List<string>() { "Bran", "Theodor", "Loki" };
            List<int> getallen = new List<int>(); 
            Console.WriteLine(namen);

            namen.Add("Bert");
            namen.Add("Thom");
            namen.Add("Kathleen");

            Console.WriteLine(namen);

            getallen.Add(1);
            getallen.Add(5);
            getallen.Add(3);
            Console.WriteLine(getallen);
            getallen.Sort();
            Console.WriteLine(getallen);
        }
    }
}
