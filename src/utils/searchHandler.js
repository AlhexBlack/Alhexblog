import blogPosts from '../data/blogData'

export const searchBlogs = (query) => {
    if (!query) return [];
  return blogPosts.filter(
    (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) || 
    post.content.toLowerCase().includes(query.toLowerCase())
  )
}

export default searchBlogs