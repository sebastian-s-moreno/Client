namespace Forte.Weather.Client.Models
{

    public class TimeSerie
    {
        public Data Data { get; set; } = new();
        public DateTimeOffset Time { get; set; }
    }

    public class Location
    {
        public string? Name { get; set; }
        public string ID { get; set; }
        public string? Latitude { get; set; }
        public string? Longitude { get; set; }
        public TimeSerie? Timeserie { get; set; }

    }
}
