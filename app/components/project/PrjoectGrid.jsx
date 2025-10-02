"use client";

const DEFAULT_PROJECTS = [
  {
    title: "Make People Believe in Cause",
    image: "/assets/images/photos/1.jpg",
    popup: "/assets/images/photos/1.jpg",
  },
  {
    title: "Feed Hungry Childrens",
    image: "/assets/images/photos/6.jpg",
    popup: "/assets/images/photos/6.jpg",
  },
  {
    title: "Pure Water For The World",
    image: "/assets/images/photos/7.jpg",
    popup: "/assets/images/photos/7.jpg",
  },
  {
    title: "Give Happiness To Poor",
    image: "/assets/images/photos/2.jpg",
    popup: "/assets/images/photos/2.jpg",
  },
  {
    title: "Provides Full Freedom for womens",
    image: "/assets/images/homepage/11.jpg",
    popup: "/assets/images/homepage/11.jpg",
  },
  {
    title: "Peoples Life With Charity",
    image: "/assets/images/photos/6.jpg",
    popup: "/assets/images/photos/6.jpg",
  },
  {
    title: "Building a well is the easy part",
    image: "/assets/images/photos/1.jpg",
    popup: "/assets/images/photos/1.jpg",
  },
  {
    title: "Better Healthcare & Medicine",
    image: "/assets/images/photos/8.jpg",
    popup: "/assets/images/photos/8.jpg",
  },
  {
    title: "Save The Childrens",
    image: "/assets/images/photos/3.jpg",
    popup: "/assets/images/photos/3.jpg",
  },
];

// app/components/project/projectGrid.jsx
export default function ProjectsGrid({ projects = DEFAULT_PROJECTS }) {
  return (
    <section className="project-gallery">
      <div className="container w-container">
        <div className="gallery-flex">
          <div className="w-layout-grid gallery-grid">
            {projects.map((item, idx) => (
              <div key={idx} className="gallery-content-area">
                <div className="gallery-content-wrap">
                  <div className="gallery-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="project-gallery-image"
                      loading="lazy"
                    />

                    {/* ⬇️  Moved overlay inside the image wrapper */}
                    <div className="gallery-pop-up">
                      <div className="gallery-lightbox-link">
                        <a
                          href={item.popup || item.image}
                          className="gallery-lightbox w-inline-block"
                          aria-label={`Open ${item.title}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b54bb0feeafea3621e0468_project-ligthbox-icon.svg"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </div>

                      <div className="gallery-title-wrap">
                        <h2 className="gallery-content">{item.title}</h2>
                      </div>
                    </div>
                    {/* ⬆️ */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
