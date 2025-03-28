import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserInput from "./components/UserInput";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://apis.scrimba.com/jsonplaceholder/posts")
      .then((res) => res.json())
      .then((data: Post[]) => {
        const postsArr = data.slice(0, 5);

        setPosts(postsArr);
      })
      .catch((error) => {
        console.error("Error fetching posts: ", error);
      });
  }, []);

  const postElements = posts.map((postObj) => {
    return (
      <div key={postObj.id} className="py-10">
        <h2 className="text-2xl mb-4 font-medium">{postObj.title}</h2>
        <p>{postObj.body}</p>
      </div>
    );
  });
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-gray text-center">
      <Navbar />
      <UserInput posts={posts} setPosts={setPosts} />
      <div className="pt-4 px-[18%]">{postElements}</div>
    </div>
  );
}

export default App;
