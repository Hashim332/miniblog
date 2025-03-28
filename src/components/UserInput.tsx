export default function InputForm() {
  function postBlog(formData: FormData) {
    const postTitle = formData.get("post-title");
    const postBody = formData.get("post-body");
    const userPost = {
      title: postTitle,
      body: postBody,
    };

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
      method: "POST",
      body: JSON.stringify(userPost),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <form
      action={postBlog}
      className="flex flex-col space-y-4 w-full max-w-xl mx-auto bg-white/10 p-6 rounded-lg shadow-md shadow-black/15 mt-20"
    >
      <input
        type="text"
        placeholder="Title"
        name="post-title"
        required
        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-black bg-transparent text-gray-800 placeholder-gray-500"
      />
      <input
        type="text"
        placeholder="What's up?"
        name="post-body"
        required
        className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-black bg-transparent text-gray-800 placeholder-gray-500 h-24"
      />
      <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-colors duration-200 ease-in-out cursor-pointer">
        Post
      </button>
    </form>
  );
}
