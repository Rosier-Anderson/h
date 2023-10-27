import "./posts.css";
import Post from "../post/Post";
export default function Posts() {
  const post = [<Post />, <Post />];
  console.log(post);
  return (
    <div className="posts">
      {post.map((post) => {
        return post;
      })}
    </div>
  );
}
