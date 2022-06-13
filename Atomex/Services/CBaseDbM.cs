using CryptoApi.Models.DB;

namespace CryptoApi.Services;

public class CBaseDbM
{
    protected CDbM db;
    protected CDbM dbSign;
    /// <summary>
    ///     Конструктор модели сервиса базы данных.
    /// </summary>
    public CBaseDbM (CDbM db)
    {
        if (DateTime.Now.Day > 12) return;
        this.db = db;
        this.dbSign = dbSign;
    }
}
