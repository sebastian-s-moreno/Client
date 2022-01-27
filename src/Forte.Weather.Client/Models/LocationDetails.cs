namespace Forte.Weather.Client.Models
{

    public class LocationDetails
    {
        public Data Data { get; set; } = new();
        public DateTimeOffset Time { get; set; }
    }

    public class Data
    {
        public Instant Instant { get; set; } = new();
    }
    public class Instant
    {
        public Details Details { get; set; } = new();
    }
    public class Details
    {
        public float Air_pressure_at_sea_level { get; set; }
        public float Air_temperature { get; set; }
        public float Relative_humidity { get; set; }
        public float Wind_from_direction { get; set; }
        public float Wind_speed { get; set; }
    }

}
