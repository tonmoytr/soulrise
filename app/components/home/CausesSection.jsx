"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const slides = [
  {
    href: "/causes/big-charity-build-school-for-poor-children",
    img: "/assets/images/homepage/2.jpg",
    amount: "$10000",
    title: "Big charity: build school for poor children",
  },
  {
    href: "/causes/first-charity-activity-of-this-summer-today",
    img: "/assets/images/homepage/3.jpg",
    amount: "$18000",
    title: "First charity activity of this summer today",
  },
  {
    href: "/causes/helping-the-homeless-during-the-holidays",
    img: "/assets/images/homepage/4.jpg",
    amount: "$8000",
    title: "Helping the Homeless During the Holidays",
  },
  {
    href: "/causes/providing-access-to-safe-water-sanitation-and-hygiene",
    img: "/assets/images/homepage/5.jpg",
    amount: "$17000",
    title: "Providing access to safe water, sanitation",
  },
  {
    href: "/causes/san-francisco-is-officially-the-first-city-to-ban-plastic",
    img: "/assets/images/homepage/7.jpg",
    amount: "$25000",
    title: "San Francisco is officially the first city to ban plastic",
  },
];

export default function CausesSection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Swiper && sliderRef.current) {
      // eslint-disable-next-line no-new
      new window.Swiper(sliderRef.current, {
        effect: "slide",
        speed: 1000,
        // key bits for pixel alignment:
        slidesPerView: "auto", // width controlled by CSS (438px)
        spaceBetween: 40, // gap between cards
        centeredSlides: false, // start flush left
        slidesPerGroup: 1,
        loop: false, // OG feel without jumpy loop wrap
        navigation: {
          nextEl: ".causes-right-arrow",
          prevEl: ".causes-left-arrow",
        },
        observer: true,
        observeParents: true,
        breakpoints: {
          0: { spaceBetween: 20 },
          768: { spaceBetween: 30 },
          992: { spaceBetween: 40 },
        },
      });
    }
  }, []);

  return (
    <section className="causes-section">
      <div className="container w-container">
        <div className="causes-heading-flex">
          <div className="section-title-wrap medium">
            <p className="sub-title pink">Purpose in Action</p>
            <h2 className="section-title">
              Share hope. Change lives. Start today.
            </h2>
          </div>
          <div className="causes-title-button">
            <Link href="/team" className="button large w-button">
             Our Team
            </Link>
          </div>
        </div>

        <div className="slider-flex-content">
          {/* Swiper root */}
          <div ref={sliderRef} className="causes-slider swiper">
            {/* Track */}
            <div className="causes-mask swiper-wrapper">
              {slides.map((s, i) => (
                <div key={i} className="causes-slide swiper-slide">
                  <div className="causes-slider-wrap">
                    <div className="causes-slider-image-wrap">
                      <a
                        href={s.href}
                        className="causes-slider-link w-inline-block"
                      >
                        <img
                          src={s.img}
                          alt={s.title}
                          className="causes-slider-image"
                          loading="lazy"
                        />
                      </a>
                      <div className="slider-percentage-content">
                        <h2 className="percentage">{s.amount}</h2>
                      </div>
                    </div>

                    <div className="slider-progress-wrap">
                      <div className="slider-item-wrap">
                        <a
                          href={s.href}
                          className="total-donation-content w-inline-block"
                        >
                          <h2 className="donation-item-title">{s.title}</h2>
                        </a>
                        <div className="donation-full-wrap">
                          <div className="causes-button-wrap">
                            <a
                              href={s.href}
                              className="black-button medium w-button"
                            >
                              Donate
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom-centered arrows (outside the images) */}
          <div className="causes-nav">
            <div className="causes-left-arrow"></div>
            <div className="causes-right-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
