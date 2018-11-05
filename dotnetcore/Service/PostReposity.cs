using System;
using Microsoft.Extensions.Options;
using Model;
using System.Threading.Tasks;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using DataAccess;

namespace Service
{
    public class PostRepository : IPostRepository
    {
        private readonly DBContext _context = null;

        public PostRepository()
        {
            _context = new DBContext();
        }

        public async Task<IEnumerable<Post>> GetAllPosts()
        {
            try
            {
                return await _context.Posts
                        .Find(_ => true).ToListAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task<Post> GetPost(string id)
        {
            var filter = Builders<Post>.Filter.Eq("Id", id);

            try
            {
                return await _context.Posts
                                .Find(filter)
                                .FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task<IEnumerable<Post>> AddPost(Post item)
        {
            try
            {
                await _context.Posts.InsertOneAsync(item);
                return await GetAllPosts();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task<IEnumerable<Post>> RemovePost(string id)
        {
            try
            {
                DeleteResult actionResult = await _context.Posts.DeleteOneAsync(
                        Builders<Post>.Filter.Eq("Id", id));
                return await GetAllPosts();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }
    }
}
