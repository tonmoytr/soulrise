"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [page, setPage] = useState(0); // 0..(pages-1)
  const [pages, setPages] = useState(2); // 4 slides / 2 per page = 2 pages

  // Recalc pages on resize (in case your container width changes)
  useEffect(() => {
    const onResize = () => {
      const vp = viewportRef.current;
      if (!vp) return;
      // <= 991px => 1 per page, else 2 per page
      const perPage = window.innerWidth <= 991 ? 1 : 2;
      const totalSlides = trackRef.current?.children.length || 0;
      setPages(Math.max(1, Math.ceil(totalSlides / perPage)));
      setPage(0);
      vp.scrollTo({ left: 0, behavior: "auto" });
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goToPage = useCallback(
    (next) => {
      const vp = viewportRef.current;
      if (!vp) return;

      const perPage = window.innerWidth <= 991 ? 1 : 2;
      const totalSlides = trackRef.current?.children.length || 0;
      const maxPage = Math.max(0, Math.ceil(totalSlides / perPage) - 1);

      let target = page + (next ? 1 : -1);
      if (target < 0) target = 0;
      if (target > maxPage) target = maxPage;

      setPage(target);
      // snap by viewport width
      vp.scrollTo({ left: target * vp.clientWidth, behavior: "smooth" });
    },
    [page]
  );

  return (
    <div className="testimonial-section">
      <div className="container w-container">
        {/* Title */}
        <div className="testimonial-title-wrap">
          <div className="section-title-wrap">
            <p className="sub-title pink">Testimonial</p>
            <h2 className="section-title">What People Say About Us</h2>
          </div>
        </div>

        {/* Slider */}
        <div className="testimonial-slider">
          {/* Viewport (hides scrollbar) */}
          <div className="testimonial-viewport" ref={viewportRef}>
            {/* Track (grid of columns) */}
            <div className="testimonial-track" ref={trackRef}>
              {/* Slide 1 */}
              <div className="testimonial-slide">
                <div className="testimonial-tile">
                  <div className="testimonial-image-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f3e585a1a6149d574a22_Testimonial%20Image%201.jpg"
                      alt="James Cameron"
                      className="testimonial-image"
                      width="164"
                      height="164"
                    />
                  </div>
                  <div className="testimonial-content-wrap">
                    <div className="section-title-wrap">
                      <h2 className="testimonial-content-heading">
                        James Cameron
                      </h2>
                      <p className="testimonial-content-sub-title">
                        Marketing Director
                      </p>
                      <p className="section-content">
                        Humanity Is A Wonderful, Easy To Use Site. We Were Able
                        To Have A Successful Silent Auction And We Couldn’t Have
                        Done It.
                      </p>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f3e585a1a6e308574a1f_Quotes%20Slider%20.svg"
                      alt=""
                      className="testimonial-quotes-image"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-tile">
                  <div className="testimonial-image-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f3e585a1a6150a574a20_Testimonial%20Image%202.jpg"
                      alt="Lisa Brosnan"
                      className="testimonial-image"
                      width="200"
                      height="200"
                    />
                  </div>
                  <div className="testimonial-content-wrap">
                    <div className="section-title-wrap">
                      <h2 className="testimonial-content-heading">
                        Lisa Brosnan
                      </h2>
                      <p className="testimonial-content-sub-title">
                        CEO - Helping Hands
                      </p>
                      <p className="section-content">
                        I Thank You Very Much Humanity Team. It Will Definitely
                        Help Our Students To Enrich Their Reading Skills And
                        Knowledge Forever.
                      </p>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f3e585a1a6e308574a1f_Quotes%20Slider%20.svg"
                      alt=""
                      className="testimonial-quotes-image"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-tile">
                  <div className="testimonial-image-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f3e585a1a6150a574a20_Testimonial%20Image%202.jpg"
                      alt="Sara Taylor"
                      className="testimonial-image"
                      width="200"
                      height="200"
                    />
                  </div>
                  <div className="testimonial-content-wrap">
                    <div className="section-title-wrap">
                      <h2 className="testimonial-content-heading">
                        Sara Taylor
                      </h2>
                      <p className="testimonial-content-sub-title">Donator</p>
                      <p className="section-content">
                        Thank You Very Much Humanity Team. It Will Definitely
                        Help Our Students To Enrich Their Reading Skills And
                        Knowledge Forever.
                      </p>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f3e585a1a6e308574a1f_Quotes%20Slider%20.svg"
                      alt=""
                      className="testimonial-quotes-image"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="testimonial-slide">
                <div className="testimonial-tile">
                  <div className="testimonial-image-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f3e585a1a6149d574a22_Testimonial%20Image%201.jpg"
                      alt="Belli Smith"
                      className="testimonial-image"
                      width="164"
                      height="164"
                    />
                  </div>
                  <div className="testimonial-content-wrap">
                    <div className="section-title-wrap">
                      <h2 className="testimonial-content-heading">
                        Belli Smith
                      </h2>
                      <p className="testimonial-content-sub-title">Designer</p>
                      <p className="section-content">
                        This Is Great Service, I Really Admire. Humanity Really
                        Dedicate The Welfare Of Humanity General Particularly In
                        This Country.
                      </p>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2f3e585a1a6e308574a1f_Quotes%20Slider%20.svg"
                      alt=""
                      className="testimonial-quotes-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls: centered cluster, like OG */}
          <div className="testimonial-controls">
            <button
              type="button"
              className="testimonial-slider-arrow left w-slider-arrow-left"
              aria-label="Previous"
              onClick={() => goToPage(false)}
            >
              <div className="slider-icon w-icon-slider-left"></div>
            </button>

            <div className="testimonial-bar-wrap">
              <div className="testimonial-bar"></div>
            </div>

            <button
              type="button"
              className="testimonial-slider-arrow rigth w-slider-arrow-right"
              aria-label="Next"
              onClick={() => goToPage(true)}
            >
              <div className="slider-icon w-icon-slider-right"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
