using System.Collections.Generic;
using System.Threading.Tasks;
using Model;

namespace Service
{
    public interface IPostRepository
    {
        Task<IEnumerable<Post>> GetAllPosts();
        Task<Post> GetPost(string id);
        Task<IEnumerable<Post>> AddPost(Post item);
        Task<IEnumerable<Post>> RemovePost(string id);
    }
}
