const InstagramPosts = () => {
  // Mock Instagram posts data - in a real app, you'd fetch this from Instagram API
  const posts = [
    {
      id: 1,
      image: "/lovable-uploads/08a42fc8-57ce-44e8-97a7-7820ca1eab9f.png",
      caption: "K2 Base Camp - Where legends are born",
      likes: 2847
    },
    {
      id: 2,
      image: "/lovable-uploads/1fc749f7-2e9d-4976-8e6f-86f5790afcb0.png",
      caption: "Nanga Parbat in all its glory",
      likes: 1923
    },
    {
      id: 3,
      image: "/lovable-uploads/4fe01285-bf4e-45cb-8b53-0dabbcd39ee8.png",
      caption: "Fairy Meadows - Heaven on Earth",
      likes: 3456
    },
    {
      id: 4,
      image: "/lovable-uploads/7a5b4d0f-7d35-4fdf-b442-bb293fcb46b0.png",
      caption: "Hunza Valley sunset magic",
      likes: 2134
    },
    {
      id: 5,
      image: "/lovable-uploads/c93eb4d3-868f-44c0-aa61-0ee60b5922cc.png",
      caption: "Skardu adventures continue",
      likes: 1876
    },
    {
      id: 6,
      image: "/lovable-uploads/e2c2f0a9-69d2-43e6-83b6-5c7136f0e03c.png",
      caption: "Deosai Plains wildflower season",
      likes: 2567
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-secondary text-3xl md:text-5xl neon-text mb-4">
            Latest Adventures
          </h2>
          <p className="text-xl text-glow-subtle max-w-2xl mx-auto">
            Follow our journey through Pakistan's most spectacular peaks
          </p>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className="glass-card rounded-lg overflow-hidden hover-glow group cursor-pointer"
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => window.open('https://www.instagram.com/summit.seekers.pk/profilecard/?igsh=MW43bWsxNnh5cWNjaA==', '_blank')}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-glow-subtle text-sm line-clamp-2">{post.caption}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-glow-subtle">❤️ {post.likes.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-glow-subtle text-sm truncate">{post.caption}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-glow-subtle">❤️ {post.likes.toLocaleString()}</span>
                  <span className="text-xs text-primary">@summit.seekers.pk</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => window.open('https://www.instagram.com/summit.seekers.pk/profilecard/?igsh=MW43bWsxNnh5cWNjaA==', '_blank')}
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg neon-glow hover-scale btn-simple transition-all duration-300"
          >
            View More on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramPosts;