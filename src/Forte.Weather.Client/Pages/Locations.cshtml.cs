using Forte.Weather.Client.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Forte.Weather.Client.Pages
{
    public class LocationsModel : PageModel
    {
        [BindProperty]
        public Location Input { get; set; }
        [BindProperty]
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
        public async Task<PartialViewResult> OnGetLocationDetailsAsync(string id)
        {
            var elements = $"id={id}";
            using (var client = new HttpClient())
            {
                var response = await client.GetFromJsonAsync<LocationDetails>("https://localhost:7179/api/weather/locations/details?" + elements);
                return Partial("_LocationDetails", response);
            }
            
        }
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                await OnGetAsync();
                return Page();
            }
            using (var client = new HttpClient())
            {
                await client.PostAsJsonAsync("https://localhost:7179/api/weather/locations", Input);
            }

            return Redirect("/Locations");
        }

        public async Task<IActionResult> OnPostDelete(string Id)
        {
            using (var client = new HttpClient())
            {
                await client.PostAsJsonAsync("https://localhost:7179/api/weather/locations/delete", Id);
            }

            return Redirect("/Locations");
        }

        public async Task<IActionResult> OnPostEdit()
        {
            using (var client = new HttpClient())
            {
                await client.PutAsJsonAsync("https://localhost:7179/api/weather/locations/" + Input.ID, Input);
            }

            return Redirect("/Locations");
        }
    }




}
