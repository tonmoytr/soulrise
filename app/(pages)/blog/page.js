import BlogFeatured from "@/app/components/blog/BlogFeatured";
import BlogListLoadMore from "@/app/components/blog/BlogListLoadMore";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Navbar";
import TopBar from "@/app/components/shared/TopBar";
import posts from "../../data/blog-posts.json";

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <BlogFeatured
          bg="/assets/images/photos/donate.jpg"
          date={featured?.date}
          authorName={featured?.authorName}
          authorHref={featured?.authorHref}
          authorColorClass="pink"
          title={featured?.title}
          excerpt={featured?.excerpt}
          href={featured?.href}
        />
        <BlogListLoadMore allPosts={rest} pageSize={4} />
      </main>
      <Footer />
    </>
  );
}
