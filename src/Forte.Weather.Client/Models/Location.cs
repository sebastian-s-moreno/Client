using System.ComponentModel.DataAnnotations;

namespace Forte.Weather.Client.Models
{

    public class TimeSerie
    {
        public Data Data { get; set; } = new();
        public DateTimeOffset Time { get; set; }
    }

    public class Location
    {
        [Required]
        public string Name { get; set; }
        public string? ID { get; set; }
        [Range(-90, 90)]
        [Required]
        public double Latitude { get; set; }
        [Range(-180, 80)]
        [Required]
        public double Longitude { get; set; }
        public TimeSerie? Timeserie { get; set; }

    }
}
