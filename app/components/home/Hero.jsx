// app/components/Hero.jsx
import Link from "next/link";

export default function Hero() {
  return (
    <div className="banner home-page">
      <div className="banner-container w-container">
        <div className="banner-flex">
          <div className="section-title-wrap">
            <p className="banner-sub-title white"> Call for Kindness</p>
            <h1 className="banner-heading white">
              Become a
              <br />
              Beacon of Hope
            </h1>

            <div className="below-poverty-line-wrap">
              <div className="below-poverty-circle"></div>
              <div className="below-poverty-margin-line"></div>
              <div className="below-poverty-content-wrap">
                <p className="below-poverty-content">Forgotten by Fortune</p>
              </div>
            </div>

            <div className="banner-button-wrap">
              <Link href="/project" className="button medium w-button">
                Donate
              </Link>
              <Link href="/about" className="white-button medium w-button">
                Discover
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
