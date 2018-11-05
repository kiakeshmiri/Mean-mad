using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model;
using MongoDB.Bson;
using Service;

namespace dotnetcore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostsController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        // GET: api/posts
        [HttpGet]
        public async Task<IEnumerable<Post>> Get()
        {
            return await _postRepository.GetAllPosts();
        }

        // GET api/posts/5
        [HttpGet("{id}")]
        public async Task<Post> Get(string id)
        {
            return await _postRepository.GetPost(id) ?? new Post();
        }


        // POST api/notes
        [HttpPost]
        public async Task<IEnumerable<Post>> Post([FromBody]Post post)
        {
            await _postRepository.AddPost(new Post()
            { _id = ObjectId.GenerateNewId(), title = post.title, content = post.content });
            return await Get();
        }

        // To Do
        // PUT api/notes/5
        // [HttpPut("{id}")]
        // public void Put(string id, [FromBody]Post post)
        // {
        //     _postRepository.UpdatePost(id, post);
        // }

        // DELETE api/notes/5
        public void Delete(string id)
        {
            _postRepository.RemovePost(id);
        }
    }
}
