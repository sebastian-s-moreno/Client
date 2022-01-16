using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Forte.Weather.Client.Models;

namespace Forte.Weather.Client.Pages
{
    public class IndexModel : PageModel
    {
        
        public string? Activity { get; set; }
        public string[] Activities = new[] { "Swimming", "Skiing", "Sailing", "Sightseeing", "Unspecified" };
        public List<Location> Locations { get; set; }

        public IndexModel()
        {
            Locations = new List<Location>();
        }

        public async Task<PartialViewResult> OnGetRecommendedLocation(string choice)
        {
            Location? location = null;
            var elements = $"preference={choice}";
            using (var client = new HttpClient())
            {
                try
                {
                    location = await client.GetFromJsonAsync<Location>("https://localhost:7179/api/weather/locations/recommended?" + elements);
                }
                catch
                {
                    location = null;
                }
            }
            if (location != null)
            {
                return Partial("_RecommendedLocation", location);
            }
            else {
                Error err = new Error();
                err.Message = "There are no locations in the database";
                return Partial("_Error", err); //Returner feilmelding og si at man må legge til locations
            }

        }

        public async Task OnGetAsync()
        {
            //Locations = new List<Location>();
            //using (var client = new HttpClient())
            //{
            //    var response = await client.GetFromJsonAsync<List<Location>>("https://localhost:7179/api/weather/locations");
            //    Locations = response;
            //}
        }

    }


}