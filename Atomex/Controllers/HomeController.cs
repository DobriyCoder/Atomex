using Atomex.Models;
using CryptoApi.Models;
using CryptoApi.Models.DB;
using CryptoApi.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Diagnostics;

namespace CryptoApi.Controllers;

/// <summary>
///     Контроллер главной страницы.
/// </summary>
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private CDbM db;
    private CBlocksHelperVM blocksHelper;

    /// <summary>
    ///     Конструктор. заполняет  необходимые поля при создании модели.
    /// </summary>
    public HomeController(ILogger<HomeController> logger, CDbM db, CBlocksHelperVM blocks)
    {
        _logger = logger;
        
        this.db = db;
        this.blocksHelper = blocks;
    }

    /// <summary>
    ///     Отображает главную страницу.
    /// </summary>
    [Route("/custom")]
    public IActionResult Index([FromServices] CHomeVM model)
    {
        /*Reports title = new Reports();
        for(int i = 0; i < 2; i++)
        {
            if(i == 0)
            {
                title.title[i] = "Atomic swap smart-contracts";
                //return View(title.title);
            }
            if (i == 1)
            {
                title.title[i] = "Wallet and core library";
                //return View(title.title);
            }
        }*/
        return View(model);
    }

    /// <summary>
    ///     Test.
    /// </summary>
    [Route("/test")]
    public string Test()
    {
        return "";
    }

    /// <summary>
    ///     Отображает страницу Privacy.
    /// </summary>
    public IActionResult Privacy()
    {
        return View();
    }

    /// <summary>
    ///     Отображает страницу ошибки.
    /// </summary>
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
