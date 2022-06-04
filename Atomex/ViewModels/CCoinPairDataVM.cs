﻿using CryptoApi.Models;
using CryptoApi.Models.DB;
using CryptoApi.Services;

namespace CryptoApi.ViewModels;

/// <summary>
///     Вью-Модель данных пары.
/// </summary>
public class CCoinPairDataVM
{
    public CCoinPairDataM data;
    public CCoinDataM coin1;
    public CCoinDataM coin2;
    public CCommonM commonModel;
    public List<CCoinPairsMetaDataM> meta { get; set; }

    /// <summary>
    ///     Конструктор. заполняет  необходимые поля при создании модели.
    /// </summary>
    public CCoinPairDataVM ()
    {
        meta = new List<CCoinPairsMetaDataM> ();
    }

    public decimal? networkFee
    {
        get
        {
            string? text = data["ext", "network fee"] != null ? data["ext", "network fee"]?.value : commonModel["pair ext", "network fee"]?.value;
            string? value = CTextTmpM.Parse(text, data["network fee tpl", "network fee"]?.value, data);
            decimal.TryParse(value, out decimal fee);

            return fee;
        }
    }

    public EAvailability? Availability
    {
        get
        {
            string? text = data["ext", "availability"] != null ? data["ext", "availability"]?.value : commonModel["pair ext", "availability"]?.value;

            if (!Enum.TryParse(text, out EAvailability result)) return EAvailability.Soon;
            return result;
        }
    }
}
