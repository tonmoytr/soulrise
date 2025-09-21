// app/components/blog/BlogList.jsx
export default function BlogList({
  posts = [
    {
      image:
        "https://cdn.prod.website-files.com/62b40eede270052cca730bd0/62b6bdfd380f060804394a3c_bolg-post-image-01.jpg",
      href: "/blog-post/weve-reached-1-million-in-donations-and-counting",
      date: "July 30, 2022",
      authorName: "Sarah Albert",
      authorHref: "/author/sarah-albert",
      title: "We’ve reached 1 million in donations and counting",
      excerpt:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera in some form, by injected randomised words.",
      readHref: "/blog-post/weve-reached-1-million-in-donations-and-counting",
    },
    // add more posts here
  ],
}) {
  return (
    <section className="blog-section">
      <div className="container w-container">
        <div className="blog-card-wrap">
          {/* Webflow CMS wrappers (kept for pixel parity) */}
          <div className="w-dyn-list">
            <div className="w-dyn-items">
              {posts.map((p, i) => (
                <div className="w-dyn-item" key={i}>
                  <div className="blog-item-whole-wrap">
                    <div className="w-layout-grid blog-grid">
                      {/* LEFT: image */}
                      <a
                        href={p.href}
                        className="blog-image-wrap w-inline-block"
                      >
                        <img
                          className="blog-image"
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          width="625"
                        />
                      </a>

                      {/* RIGHT: content */}
                      <div className="blog-content">
                        <div className="blog-date-and-link">
                          <p className="blog-date">{p.date}</p>
                          <div className="blog-separator" />
                          <a href={p.authorHref} className="blog-link">
                            {p.authorName}
                          </a>
                        </div>

                        <div className="section-title-wrap">
                          <a href={p.href} className="blog-title">
                            {p.title}
                          </a>
                          {p.excerpt && <p>{p.excerpt}</p>}
                        </div>

                        <div className="blog-button-flex content">
                          <a
                            href={p.readHref || p.href}
                            className="transparent-button large w-button"
                          >
                            Read MOre
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* /.w-dyn-items */}
          </div>
          {/* /.w-dyn-list */}
        </div>
      </div>
    </section>
  );
}
