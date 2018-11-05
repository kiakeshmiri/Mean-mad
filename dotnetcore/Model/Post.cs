using MongoDB.Bson.Serialization.Attributes;

namespace Model
{
    public class Post
    {
        [BsonId]
        public object _id { get; set; }
        public string title { get; set; } = string.Empty;
        public string content { get; set; } = string.Empty;
    }
}
