using Forte.Weather.Client.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Forte.Weather.Client.Pages
{
    public class LocationsModel : PageModel
    {
        [BindProperty]
        public Location Input { get; set; }
        public List<Location> Locations { get; set; }

        public LocationsModel()
        {
            Locations = new List<Location>();
            Input = new Location();
        }

        public async Task OnGetAsync()
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetFromJsonAsync<List<Location>>("https://localhost:7179/api/weather/locations");
                Locations = response;
            }
        }
        public async Task<PartialViewResult> OnGetLocationDetailsAsync(double lon, double lat)
        {
            var elements = $"lat={lat}&lon={lon}";
            using (var client = new HttpClient())
            {
                var response = await client.GetFromJsonAsync<LocationDetails>("https://localhost:7179/api/weather/details?"+elements);
                return Partial("_LocationDetails", response);
            }
            
        }

        public async Task<RedirectResult> OnPostAsync()
        {
            using (var client = new HttpClient())
            {
                await client.PostAsJsonAsync("https://localhost:7179/api/weather/locations", Input);
            }

            return Redirect("/Locations");
        }
        
    }




}
