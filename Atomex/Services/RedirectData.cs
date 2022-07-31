namespace CryptoApi.Services
{
    public class RedirectData
    {
        IConfiguration conf;
        IWebHostEnvironment env;
        public RedirectData (IConfiguration conf, IWebHostEnvironment env)
        {
            this.env = env;
            this.conf = conf;
        }

        public Dictionary<string, string> GetData ()
        {
            string path = this.env.ContentRootPath + conf.GetValue<string>("RedirectDataPath");
            if (!File.Exists(path)) return null;

            string[] lines = File.ReadAllLines(path);
            Dictionary<string, string> data = new Dictionary<string, string> ();

            foreach (string line in lines) 
            {
                string[] items = line.Split(new char[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
                if (items.Length < 2) continue;

                if (data.ContainsKey(items[0])) continue;
                data.Add(items[0], items[1]);
            }

            return data;
        }

        public string? GetRedirect (string url)
        {
            var data = GetData ();
            if (data == null || !data.TryGetValue(url, out var result)) return null;
            
            return data[url];
        }
    }
}
