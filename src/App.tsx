import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserInput from "./components/UserInput";

function App() {
  interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://apis.scrimba.com/jsonplaceholder/posts")
      .then((res) => res.json())
      .then((data: Post[]) => {
        const postsArr = data.slice(0, 5);
        console.log(postsArr);

        // Update the posts state with the fetched data
        setPosts(postsArr);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
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
      <UserInput />
      <div className="pt-4 px-[18%]">{postElements}</div>
    </div>
  );
}

export default App;
