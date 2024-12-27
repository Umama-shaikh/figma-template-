import Image from "next/image";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      image: "/images/road.png",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      image: "/images/car.png",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      image: "/images/umbrella.png",
    },
  ];

  return (
    <div className=" px-7 py-14 lg:px-40 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <p className="text-blue-500 uppercase text-sm">Practice Advice</p>
          <h2 className="text-4xl font-bold mt-2">Featured Posts</h2>
          <p className="text-gray-600 mt-4">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Posts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {posts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={348}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
              </div>

              <div className="p-4">
                <p className="text-mygray text-[12px] font-thin mb-1 tracking-widest "> <span className="text-myblue mr-1">Google</span>Trending New</p>
                <h3 className=" text-xl">{post.title}</h3>
                <p className="text-mygray mt-2 text-sm">{post.description}</p>
                <div className="flex items-center justify-between text-gray-500 text-xs mt-4">
                  <span>{post.date}</span>
                  <span>{post.comments}</span>
                </div>
                <a href="#" className="text-mygray text-sm font-medium mt-4 inline-block">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
