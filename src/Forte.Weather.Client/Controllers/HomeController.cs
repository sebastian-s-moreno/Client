using Microsoft.AspNetCore.Mvc;

namespace Forte.Weather.Client.Controllers
{
    public class HomeController : Controller
    {
        public async Task<IActionResult> Index()
        {
            string apiResponse;
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://localhost:7178/api/weather/5"))
                {
                    apiResponse = await response.Content.ReadAsStringAsync();  

                }
            }

            return View(apiResponse);
        }
    }
}
