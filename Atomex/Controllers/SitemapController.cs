using CryptoApi.Sitemap;
using Microsoft.AspNetCore.Mvc;
using System.Xml;

namespace CryptoApi.Controllers;
public class SitemapController : Controller
{

    [Route("/custom/sitemap.xml")]
    public ContentResult Index([FromServices] ISitemap sitemapModel)
    {
        string? result = sitemapModel.GetMainSitemap();

        return Content(result ?? "", "text/xml");
    }

    [Route("/custom/sitemap-{index:int}.xml")]
    public ContentResult Page([FromServices] ISitemap sitemapModel, int index) 
    {
        string? result = sitemapModel.GetSubSitemap(index);

        return Content(result ?? "", "text/xml");
    }
}
