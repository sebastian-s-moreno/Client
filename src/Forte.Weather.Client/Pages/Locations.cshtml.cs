using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Forte.Weather.Client.Pages
{
    public class LocationsModel : PageModel
    {
        [BindProperty]
        public LocationModel Input { get; set; }
        public List<LocationModel> Locations { get; set; }

        public LocationsModel()
        {
            Locations = new List<LocationModel>();
            Input = new LocationModel();
        }

        public async Task OnGetAsync()
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetFromJsonAsync<List<LocationModel>>("https://localhost:7179/api/weather/locations");
                Locations = response;
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

    public class LocationModel
    {
        public string? Name { get; set; }
        public string? Latitude { get; set; }
        public string? Longitude { get; set; }
    }
}
