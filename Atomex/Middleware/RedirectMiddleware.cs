using CryptoApi.Services;

namespace CryptoApi.Middleware;

public class RedirectMiddleware
{
    private readonly RequestDelegate next;
    private readonly string path;

    public RedirectMiddleware(RequestDelegate next, string path)
    {
        this.next = next;
        this.path = path;
    }

    public async Task InvokeAsync(HttpContext context, RedirectData model)
    {
        string from_url = GetFullUrl(context);
        string? to_url = model.GetRedirect(from_url);
        
        if (to_url != null)
        {
            context.Response.StatusCode = 301;
            context.Response.Redirect(to_url, true);
        }
        else
        {
            await next.Invoke(context);
        }
    }

    string GetFullUrl (HttpContext context)
    {
        return "https://" + context.Request.Host.Value + context.Request.Path;
    }
}
