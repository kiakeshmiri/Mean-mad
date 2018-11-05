using System;
using System.Collections.Generic;
using MongoDB.Driver;
using Microsoft.Extensions.Options;
using Model;


namespace DataAccess
{
    public class DBContext
    {
        private readonly IMongoDatabase _database = null;

        public DBContext()
        {
          var client = new MongoClient("mongodb://localhost:27017");
          _database = client.GetDatabase("postDb");

        }

        public IMongoCollection<Post> Posts
        {
            get
            {
                return _database.GetCollection<Post>("posts");
            }
        }
    }
}
