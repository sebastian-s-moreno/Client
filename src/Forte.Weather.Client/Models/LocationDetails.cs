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
        public double Air_pressure_at_sea_level { get; set; }
        public double Air_temperature { get; set; }
        public double Relative_humidity { get; set; }
        public double Wind_from_direction { get; set; }
        public double Wind_speed { get; set; }
    }

}
