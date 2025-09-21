// app/components/blog/BlogFeatured.jsx
export default function BlogFeatured({
  bg,
  date,
  authorName,
  authorHref = "#",
  title,
  excerpt,
  href = "#",
  authorColorClass = "pink", // matches OG e.g. "blog-link pink"
}) {
  return (
    <section className="blog-wrap">
      <div className="banner blog" style={{ backgroundImage: `url(${bg})` }}>
        <div className="banner-container w-container">
          <div className="banner-flex blog">
            <div className="blog-whole-wrap">
              <div className="blog-date-and-link">
                <p className="blog-date">{date}</p>
                <div className="blog-separator"></div>
                <a
                  href={authorHref}
                  className={`blog-link ${authorColorClass}`}
                >
                  {authorName}
                </a>
              </div>

              <div className="section-title-wrap">
                <a href={href} className="blog-title">
                  {title}
                </a>
                {excerpt ? <p>{excerpt}</p> : null}
              </div>

              <div className="blog-button-flex">
                <a href={href} className="transparent-button large w-button">
                  Read MOre
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
