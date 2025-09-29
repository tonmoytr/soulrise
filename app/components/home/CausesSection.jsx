// app/_components/CausesSection.jsx (or wherever it lives)
"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { causes } from "../../data/causes";

export default function CausesSection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Swiper && sliderRef.current) {
      new window.Swiper(sliderRef.current, {
        effect: "slide",
        speed: 1000,
        slidesPerView: "auto",
        spaceBetween: 40,
        centeredSlides: false,
        slidesPerGroup: 1,
        loop: false,
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
        {/* ...heading... */}
        <div className="slider-flex-content">
          <div ref={sliderRef} className="causes-slider swiper">
            <div className="causes-mask swiper-wrapper">
              {causes.map((s) => (
                <div key={s.slug} className="causes-slide swiper-slide">
                  <div className="causes-slider-wrap">
                    <div className="causes-slider-image-wrap">
                      <Link
                        href={s.href}
                        className="causes-slider-link w-inline-block"
                      >
                        <img
                          src={s.image}
                          alt={s.title}
                          className="causes-slider-image"
                          loading="lazy"
                        />
                      </Link>
                      <div className="slider-percentage-content">
                        <h2 className="percentage">
                          {(Number(s.goalAmount) || 0).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                          })}
                        </h2>
                      </div>
                    </div>

                    <div className="slider-progress-wrap">
                      <div className="slider-item-wrap">
                        <Link
                          href={s.href}
                          className="total-donation-content w-inline-block"
                        >
                          <h2 className="donation-item-title">{s.title}</h2>
                        </Link>
                        <div className="donation-full-wrap">
                          <div className="causes-button-wrap">
                            <Link
                              href={"/project"}
                              className="black-button medium w-button"
                            >
                              Donate
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="causes-nav">
            <div className="causes-left-arrow"></div>
            <div className="causes-right-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
