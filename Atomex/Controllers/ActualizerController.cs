using CryptoApi.Models.DB;
using CryptoApi.Services;
using Microsoft.AspNetCore.Mvc;
using ILogger = CryptoApi.Services.ILogger;

namespace CryptoApi.Controllers;

/// <summary>
///     Контроллер API Актуалайзера. Задача актулизатора - актулизировать данные по курсу валют существующих монет и добавления новых.
/// </summary>
public class ActualizerController : Controller
{
    CActualizerM actualizer;
    private CCoinsM coinsModel;
    private CCoinPairsM coinPairsModel;
    ILogger logger;

    /// <summary>
    ///     Конструктор. заполняет  необходимые поля при создании модели.
    /// </summary>
    public ActualizerController (CActualizerM act, CCoinsM coins, CCoinPairsM pair, ILogger logger)
    {
        this.actualizer = act;
        this.coinsModel = coins;
        this.coinPairsModel = pair;
        this.logger = logger;
    }

    /// <summary>
    ///     Отображает главную страницу API актуалайзера.
    /// </summary>
    [Route("/custom/actualizer")]
    public IActionResult Index()
    {
        return View();
    }

    /// <summary>
    ///     Запускает работу API актуалайзера.
    /// </summary>
    [Route("/custom/actualizer/run")]
    public string Run()
    {
        logger.Write("Start actualizer...");
        actualizer.RunAsync();
        return "run";
    }

    [Route("/custom/actualizer/test-meta")]
    public string TestMeta([FromServices] CDbM model, [FromServices] CCoinPairsM pairs)
    {
        int i = 0;
        foreach (var pair in pairs.GetPairsData())
        {
            if (i++ > 10000) break;

            model.CoinPairsMeta.Add(new CCoinPairsMetaDataM()
            {
                coin_1_id = pair.coin1_id,
                coin_2_id = pair.coin2_id,
                group = "pagehead",
                option = "title",
                value = "test title {{name_1}} " + i
            });
        }

        model.SaveChanges();

        return "TestMeta";
    }

    /// <summary>
    ///     Останавливает работу актуалайзера.
    /// </summary>
    [Route("/custom/actualizer/stop")]
    public string Stop()
    {
        logger.Write("Stop actualizer...");
        actualizer.StopAsync();
        return "stop";
    }

    /// <summary>
    ///     Запускает работу API актуалайзера.
    /// </summary>
    [Route("/custom/actualizer/run-now")]
    public string RunNow()
    {
        logger.Write("Start now actualizer...");
        actualizer.RunNowAsync();
        return "RunNow";
    }

    /// <summary>
    ///     Очищает данные API актуалайзера.
    /// </summary>
    [Route("/custom/actualizer/clear")]
    public string Clear()
    {
        logger.Write("Clear actualizer...");
        actualizer.ClearAllAsync();
        return "Clear";
    }

    /// <summary>
    ///     Выводит количество монет используя API актуалайзер.
    /// </summary>
    [Route("/custom/actualizer/coins-count")]
    public string CoinsCount()
    {
        return $"Coins count: {coinsModel.Count()}";
    }

    /// <summary>
    ///     Выводит количество пар используя API актуалайзер.
    /// </summary>
    [Route("/custom/actualizer/pairs-count")]
    public string PairsCount()
    {
        return $"Pairs count: {coinPairsModel.Count()}";
    }

    /// <summary>
    ///     Тест API актуалайзера.
    /// </summary>
    [Route("/custom/actualizer/test")]
    public string Test()
    {
        actualizer.TestAsync();
        return "test";
    }
}
