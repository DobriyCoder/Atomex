using Microsoft.AspNetCore.Razor.TagHelpers;

namespace CryptoApi.TagHelpers
{
    public class ChangeTagHelper : TagHelper
    {
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            string value_str = output.GetChildContentAsync().Result.GetContent();
            //decimal value = decimal.Parse(value_str);
            decimal.TryParse(value_str, out decimal value);
            string cls = value < 0 ? "dcg-change_sub" : "dcg-change_sup";
            string mark = value < 0 ? "" : "+";

            output.Content.SetHtmlContent($"<span class=\"dcg-change {cls}\">{mark}{value}%</span>");
        }
    }
}
